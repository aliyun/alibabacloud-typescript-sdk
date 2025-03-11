// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CheckExpandStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether scale-out operations can be performed on the database.
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * success
   */
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      isActive: 'IsActive',
      msg: 'Msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isActive: 'boolean',
      msg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBRequestInstDbName extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance on which the databases need to be vertically partitioned. This parameter is required only when the Type parameter is set to VERTICAL.
   * 
   * @example
   * drds_sample_rds_id
   */
  dbInstanceId?: string;
  /**
   * @example
   * ["drds_sample_db1", "drds_sample_db2"]
   */
  shardDbName?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      shardDbName: 'ShardDbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      shardDbName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.shardDbName)) {
      $dara.Model.validateArray(this.shardDbName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBRequestRdsSuperAccount extends $dara.Model {
  /**
   * @remarks
   * The account name of the super administrator that is used to connect to the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * drds_sample_rds_super_account
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of ApsaraDB RDS instance.
   * 
   * @example
   * drds_sample_rds_id
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The password of the super administrator account that is used to connect to the ApsaraDB RDS instance.
   * 
   * @example
   * drds_sample_rds_super_password
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstanceId: 'DbInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstanceId: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList extends $dara.Model {
  drdsInstanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      drdsInstanceIdList: 'drdsInstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.drdsInstanceIdList)) {
      $dara.Model.validateArray(this.drdsInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the instance.
   */
  drdsInstanceIdList?: CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList;
  /**
   * @remarks
   * Indicates the ID of the order.
   * 
   * @example
   * 111111111111111
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceIdList: 'DrdsInstanceIdList',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceIdList: CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList,
      orderId: 'number',
    };
  }

  validate() {
    if(this.drdsInstanceIdList && typeof (this.drdsInstanceIdList as any).validate === 'function') {
      (this.drdsInstanceIdList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAccountRequestDbPrivilege extends $dara.Model {
  /**
   * @remarks
   * The name of the database that you want to manage by using the account to create.
   * 
   * @example
   * test123
   */
  dbName?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the account to manage the database.
   * 
   * @example
   * DDL
   */
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      privilege: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackMenuResponseBodyListList extends $dara.Model {
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * *   **Logic **: logical backup
   * *   **phy**: physical backup
   * 
   * @example
   * phy
   */
  menuName?: string;
  /**
   * @remarks
   * Indicates whether backup recovery is supported.
   * 
   * @example
   * true
   */
  support?: boolean;
  static names(): { [key: string]: string } {
    return {
      menuName: 'MenuName',
      support: 'Support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      menuName: 'string',
      support: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackMenuResponseBodyList extends $dara.Model {
  list?: DescribeBackMenuResponseBodyListList[];
  static names(): { [key: string]: string } {
    return {
      list: 'list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeBackMenuResponseBodyListList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDbsResponseBodyDbNames extends $dara.Model {
  dbName?: string[];
  static names(): { [key: string]: string } {
    return {
      dbName: 'dbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dbName)) {
      $dara.Model.validateArray(this.dbName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLocalResponseBodyBackupPolicyDO extends $dara.Model {
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupAppName?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupDbName?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupLevel?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupLog?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupMode?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupPolicyMode?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupType?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  dataBackupRetentionPeriod?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  gmtCreate?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  gmtModified?: number;
  /**
   * @remarks
   * Indicates whether the feature is enabled to forcibly delete binary log files if the used storage space of the instance exceeds 90% of the total storage space or the remaining storage space is less than 5 GB. Valid values:
   * 
   * *   1: The feature is enabled.
   * *   0: The feature is disabled.
   * 
   * @example
   * 1
   */
  highSpaceUsageProtection?: number;
  /**
   * @remarks
   * The number of hours for which log backup files are retained on the instance. Valid values: 0 to 168. Default value: **18**. The value **0** indicates that log backup files are not retained.
   * 
   * @example
   * 18
   */
  localLogRetentionHours?: number;
  /**
   * @remarks
   * The maximum storage usage that is allowed for local log files. Valid values: 0 to 50. Default value: 30.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  nextBackupActuallyTime?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupAppName: 'BackupAppName',
      backupDbName: 'BackupDbName',
      backupLevel: 'BackupLevel',
      backupLog: 'BackupLog',
      backupMode: 'BackupMode',
      backupPolicyMode: 'BackupPolicyMode',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupType: 'BackupType',
      dataBackupRetentionPeriod: 'DataBackupRetentionPeriod',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      nextBackupActuallyTime: 'NextBackupActuallyTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupAppName: 'string',
      backupDbName: 'string',
      backupLevel: 'string',
      backupLog: 'string',
      backupMode: 'string',
      backupPolicyMode: 'string',
      backupRetentionPeriod: 'number',
      backupType: 'string',
      dataBackupRetentionPeriod: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      highSpaceUsageProtection: 'number',
      localLogRetentionHours: 'number',
      localLogRetentionSpace: 'number',
      logBackupRetentionPeriod: 'number',
      nextBackupActuallyTime: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBodyBackupPolicyDO extends $dara.Model {
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupAppName?: string;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupDbName?: string;
  /**
   * @remarks
   * The backup level. Valid values:
   * 
   * *   **db**: database backup
   * *   **instance**: instance backup
   * 
   * @example
   * instance
   */
  backupLevel?: string;
  /**
   * @remarks
   * Indicates whether the log backup feature is enabled. Valid values:
   * 
   * *   **1**: The log backup feature is enabled.
   * *   **0**: The log backup feature is disabled.
   * 
   * @example
   * 1
   */
  backupLog?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **logic**: logical backup
   * *   **phy**: fast backup
   * 
   * @example
   * phy
   */
  backupMode?: string;
  /**
   * @remarks
   * The type of the backup policy. Valid values:
   * 
   * *   **DataBackupPolicy**: a data backup policy
   * *   **LogBackupPolicy**: a log backup policy
   * 
   * @example
   * DataBackupPolicy
   */
  backupPolicyMode?: string;
  /**
   * @remarks
   * The retention period of backup files. Unit: days.
   * 
   * @example
   * 0
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  backupType?: string;
  /**
   * @remarks
   * The retention period of data backup files. Unit: days.
   * 
   * @example
   * 0
   */
  dataBackupRetentionPeriod?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  gmtCreate?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  gmtModified?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  highSpaceUsageProtection?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  localLogRetentionHours?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * 0
   */
  localLogRetentionSpace?: number;
  /**
   * @remarks
   * The retention period of log backup files. Unit: days.
   * 
   * @example
   * 0
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * No value is returned.
   * 
   * @example
   * null
   */
  nextBackupActuallyTime?: string;
  /**
   * @remarks
   * The backup cycle. You can specify multiple backup cycles. Separate multiple backup cycles with commas (,). Valid values:
   * 
   * *   **0**: every Monday
   * *   **1**: every Tuesday
   * *   **2**: every Wednesday
   * *   **3**: every Thursday
   * *   **4**: every Friday
   * *   **5**: every Saturday
   * *   **6**: every Sunday
   * 
   * @example
   * 1,4
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time range in which a backup is performed. The time is displayed in UTC.
   * 
   * @example
   * 22:00:00-23:00:00
   */
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupAppName: 'BackupAppName',
      backupDbName: 'BackupDbName',
      backupLevel: 'BackupLevel',
      backupLog: 'BackupLog',
      backupMode: 'BackupMode',
      backupPolicyMode: 'BackupPolicyMode',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupType: 'BackupType',
      dataBackupRetentionPeriod: 'DataBackupRetentionPeriod',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      nextBackupActuallyTime: 'NextBackupActuallyTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupAppName: 'string',
      backupDbName: 'string',
      backupLevel: 'string',
      backupLog: 'string',
      backupMode: 'string',
      backupPolicyMode: 'string',
      backupRetentionPeriod: 'number',
      backupType: 'string',
      dataBackupRetentionPeriod: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      highSpaceUsageProtection: 'number',
      localLogRetentionHours: 'number',
      localLogRetentionSpace: 'number',
      logBackupRetentionPeriod: 'number',
      nextBackupActuallyTime: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBodyBackupSetsBackupSetBackupDbs extends $dara.Model {
  backupDb?: string[];
  static names(): { [key: string]: string } {
    return {
      backupDb: 'backupDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDb: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.backupDb)) {
      $dara.Model.validateArray(this.backupDb);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBodyBackupSetsBackupSet extends $dara.Model {
  /**
   * @remarks
   * Backup Recovery duration.
   * 
   * @example
   * 2020-06-05 11:31:38
   */
  backupConsitentTime?: string;
  /**
   * @remarks
   * The list of backup databases.
   */
  backupDbs?: DescribeBackupSetsResponseBodyBackupSetsBackupSetBackupDbs;
  /**
   * @remarks
   * The end of the backup time which is in timestamp format (measured in millisecond).
   * 
   * >  0 indicates not finished.
   * 
   * @example
   * 1591327899000
   */
  backupEndTime?: number;
  /**
   * @remarks
   * The level of the backup. Valid values:
   * 
   * *   db: The database level.
   * *   instance: the instance level.
   * 
   * @example
   * instance
   */
  backupLevel?: string;
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * *   logic: the logical backup.
   * *   phy: fast backup
   * 
   * @example
   * logic
   */
  backupMode?: string;
  /**
   * @remarks
   * The beginning of the backup time which is in timestamp format (measured in millisecond).
   * 
   * @example
   * 1591327754000
   */
  backupStartTime?: number;
  /**
   * @remarks
   * The size of the backup set. Unit: MB.
   * 
   * @example
   * 93.24
   */
  backupTotalSize?: string;
  /**
   * @remarks
   * The type of the backup. Valid values:
   * 
   * *   manual: indicates a manual backup.
   * *   auto: indicates an automatic backup.
   * 
   * @example
   * manual
   */
  backupType?: string;
  /**
   * @remarks
   * Indicates whether the backup set can be restored. Valid values:
   * 
   * @example
   * false
   */
  enableRecovery?: boolean;
  /**
   * @remarks
   * The ID of the data backup file you want to use.
   * 
   * @example
   * ba30d5c4-a6dc-11ea-bd40-************
   */
  id?: string;
  /**
   * @remarks
   * The status of the backup instance. Valid values:
   * 
   * *   \\-1: Failed
   * *   0: Not started
   * *   1: The storage instance is running.
   * *   2: Success
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backupConsitentTime: 'BackupConsitentTime',
      backupDbs: 'BackupDbs',
      backupEndTime: 'BackupEndTime',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      backupStartTime: 'BackupStartTime',
      backupTotalSize: 'BackupTotalSize',
      backupType: 'BackupType',
      enableRecovery: 'EnableRecovery',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupConsitentTime: 'string',
      backupDbs: DescribeBackupSetsResponseBodyBackupSetsBackupSetBackupDbs,
      backupEndTime: 'number',
      backupLevel: 'string',
      backupMode: 'string',
      backupStartTime: 'number',
      backupTotalSize: 'string',
      backupType: 'string',
      enableRecovery: 'boolean',
      id: 'string',
      status: 'number',
    };
  }

  validate() {
    if(this.backupDbs && typeof (this.backupDbs as any).validate === 'function') {
      (this.backupDbs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBodyBackupSets extends $dara.Model {
  backupSet?: DescribeBackupSetsResponseBodyBackupSetsBackupSet[];
  static names(): { [key: string]: string } {
    return {
      backupSet: 'backupSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSet: { 'type': 'array', 'itemType': DescribeBackupSetsResponseBodyBackupSetsBackupSet },
    };
  }

  validate() {
    if(Array.isArray(this.backupSet)) {
      $dara.Model.validateArray(this.backupSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTimesResponseBodyRestoreTime extends $dara.Model {
  /**
   * @remarks
   * Indicates the end time. The time is in the UNIX timestamp format. The time is in UTC. Unit: ms.
   * 
   * @example
   * 1568636922671
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates the start time. The time is in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * @example
   * 1568632853000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBroadcastTablesResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a table is a broadcast table.
   * 
   * @example
   * true
   */
  broadcast?: boolean;
  /**
   * @remarks
   * Indicates the type of the broadcast table. Valid values:
   * 
   * *   **1**: multi-write mode
   * *   **2**: synchronous mode
   * 
   * @example
   * 1
   */
  broadcastType?: string;
  /**
   * @remarks
   * Indicates the storage type of the database. Valid values:
   * 
   * *   **0**: RDS
   * *   **4**: PolarDB
   * 
   * @example
   * 0
   */
  dbInstType?: number;
  /**
   * @remarks
   * Indicates whether the broadcast table was sharded.
   * 
   * @example
   * false
   */
  isShard?: boolean;
  /**
   * @remarks
   * Indicates the activation state of the broadcast table. Valid values:
   * 
   * *   **1**: The broadcast table is activated.
   * *   **2**: The broadcast table is being activated.
   * *   **3**: An exception occurs when the broadcast table is being activated.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Indicates the name of the table.
   * 
   * @example
   * nation
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      broadcast: 'Broadcast',
      broadcastType: 'BroadcastType',
      dbInstType: 'DbInstType',
      isShard: 'IsShard',
      status: 'Status',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      broadcast: 'boolean',
      broadcastType: 'string',
      dbInstType: 'number',
      isShard: 'boolean',
      status: 'number',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponseBodyDatabasesDatabase extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of a storage-layer database.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates the description of the storage-layer database.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates the state of the storage-layer database. Valid values:
   * 
   * *   **0**: The database is being created.
   * *   **1**: The database is available.
   * *   **3**: The database is being deleted.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      description: 'Description',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      description: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponseBodyDatabases extends $dara.Model {
  database?: DescribeDbInstanceDbsResponseBodyDatabasesDatabase[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: { 'type': 'array', 'itemType': DescribeDbInstanceDbsResponseBodyDatabasesDatabase },
    };
  }

  validate() {
    if(Array.isArray(this.database)) {
      $dara.Model.validateArray(this.database);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceId extends $dara.Model {
  readOnlyDBInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyDBInstanceId)) {
      $dara.Model.validateArray(this.readOnlyDBInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponseBodyItemsDBInstance extends $dara.Model {
  allowAllCategory?: boolean;
  /**
   * @remarks
   * The description of the storage instance.
   * 
   * @example
   * test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The ID of the storage instance.
   * 
   * @example
   * rm-****************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Storage layer instance status. Valid values:
   * 
   * *   **0**: creating
   * *   **1**: In use
   * *   **3**: Deleting
   * *   **5**: restarting
   * *   **6**: upgrading /Downgrading
   * *   **7**: Recovering
   * *   **8**: switching the Internet and intranet
   * 
   * @example
   * 0
   */
  DBInstanceStatus?: number;
  /**
   * @remarks
   * The storage layer instance type.
   * 
   * @example
   * Primary
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The engine of the storage instance.
   */
  engine?: string;
  /**
   * @remarks
   * The version of the engine for the storage instance.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The network type of the storage layer. Valid values:
   * 
   * *   **VPC**: VPC
   * *   **CLASSIC **: Classic Network
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The details about a read-only storage instance.
   */
  readOnlyDBInstanceId?: DescribeDbInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceId;
  /**
   * @remarks
   * The ID of the region where the storage instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the zone where the storage instance resides.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allowAllCategory: 'AllowAllCategory',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceType: 'DBInstanceType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceNetworkType: 'InstanceNetworkType',
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAllCategory: 'boolean',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'number',
      DBInstanceType: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceNetworkType: 'string',
      readOnlyDBInstanceId: DescribeDbInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceId,
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.readOnlyDBInstanceId && typeof (this.readOnlyDBInstanceId as any).validate === 'function') {
      (this.readOnlyDBInstanceId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponseBodyItems extends $dara.Model {
  DBInstance?: DescribeDbInstancesResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDbInstancesResponseBodyItemsDBInstance },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstance)) {
      $dara.Model.validateArray(this.DBInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the time when the database was created. The value is in the UNIX timestamp format. Unit: ms.
   * 
   * @example
   * 1602050276000
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates the storage type of the database.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * Indicates the name of the database.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates the type of the instance in which the database is deployed. Valid values:
   * 
   * *   **MASTER**: The instance is a primary instance.
   * *   **SLAVE**: The instance is a read-only instance.
   * 
   * @example
   * MASTER
   */
  instRole?: string;
  /**
   * @remarks
   * Indicates the database sharding method.
   * 
   * *   **HORIZONTAL**: The database is horizontally sharded.
   * *   **VERTICAL**: The database is vertically sharded.
   * 
   * @example
   * HORIZONTAL
   */
  mode?: string;
  /**
   * @remarks
   * Indicates the schema name of the database.
   * 
   * @example
   * db_test*******************
   */
  schema?: string;
  /**
   * @remarks
   * Indicates the state of the database. Valid values:
   * 
   * *   **TO_BE_INIT**: The database is being created.
   * *   **NORMAL**: The database is running.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbInstType: 'DbInstType',
      dbName: 'DbName',
      instRole: 'InstRole',
      mode: 'Mode',
      schema: 'Schema',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbInstType: 'string',
      dbName: 'string',
      instRole: 'string',
      mode: 'string',
      schema: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceDBNodesDBNode extends $dara.Model {
  /**
   * @remarks
   * The ID of the node in the apsaradb for PolarDB cluster.
   * 
   * @example
   * pi-***************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The role of a node in the apsaradb for PolarDB cluster. Valid values:
   * 
   * *   **Reader**
   * *   **Writer**
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * The status of the nodes in the PolarDB cluster.
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The ID of the zone where the node of the PolarDB cluster resides.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      DBNodeStatus: 'DBNodeStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      DBNodeRole: 'string',
      DBNodeStatus: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceDBNodes extends $dara.Model {
  DBNode?: DescribeDrdsDBClusterResponseBodyDbInstanceDBNodesDBNode[];
  static names(): { [key: string]: string } {
    return {
      DBNode: 'DBNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNode: { 'type': 'array', 'itemType': DescribeDrdsDBClusterResponseBodyDbInstanceDBNodesDBNode },
    };
  }

  validate() {
    if(Array.isArray(this.DBNode)) {
      $dara.Model.validateArray(this.DBNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceEndpointsEndpoint extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB connection address.
   * 
   * @example
   * pe-*****************
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID list of the nodes in the PolarDB connection string. Separate multiple nodes with commas (,).
   * 
   * @example
   * pi-*****************,pi-*****************
   */
  nodeIds?: string;
  /**
   * @remarks
   * The read ratio of this connection address managed by the DRDS database.
   * 
   * @example
   * 85
   */
  readWeight?: number;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      nodeIds: 'NodeIds',
      readWeight: 'ReadWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      nodeIds: 'string',
      readWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstanceEndpoints extends $dara.Model {
  endpoint?: DescribeDrdsDBClusterResponseBodyDbInstanceEndpointsEndpoint[];
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: { 'type': 'array', 'itemType': DescribeDrdsDBClusterResponseBodyDbInstanceEndpointsEndpoint },
    };
  }

  validate() {
    if(Array.isArray(this.endpoint)) {
      $dara.Model.validateArray(this.endpoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBodyDbInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB cluster.
   * 
   * @example
   * pc-*****************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the PolarDB instance.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The information about the nodes in the PolarDB Cluster.
   */
  DBNodes?: DescribeDrdsDBClusterResponseBodyDbInstanceDBNodes;
  /**
   * @remarks
   * The type of storage used by the DRDS database.
   * 
   * @example
   * POLARDB
   */
  dbInstType?: string;
  /**
   * @remarks
   * The endpoint of the PolarDB read /write splitting endpoint
   */
  endpoints?: DescribeDrdsDBClusterResponseBodyDbInstanceEndpoints;
  /**
   * @remarks
   * The type of the DRDS database storage engine.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The version of the DRDS database storage engine.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the PolarDB cluster expires.
   * 
   * @example
   * 2019-09-27 11:22:33
   */
  expireTime?: string;
  /**
   * @remarks
   * The network type of the PolarDB cluster.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the PolarDB cluster.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The PolarDB access port.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of RDS instance. PolarDB cluster does not support this parameter.
   * 
   * @example
   * ignore
   */
  rdsInstType?: string;
  /**
   * @remarks
   * This parameter specifies the Read mode when the database storage type is PolarDB.
   * 
   * Valid values:
   * 
   * *   **DEFAULT**: the default mode (that is, all read traffic is sent to the PolarDB read /write node).
   * *   **CUSTOM**: Custom mode (you can customize the ratio of traffic sent to read /write nodes and read-only nodes).
   * *   **BALANCE**: read balancing mode (the read traffic is automatically distributed by the read load module of the PolarDB cluster, which can also be understood as the read traffic being evenly distributed to each node).
   * 
   * @example
   * CUSTOM
   */
  readMode?: string;
  /**
   * @remarks
   * The number of days remaining on the PolarDB for MySQL instance.
   * 
   * @example
   * 0
   */
  remainDays?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBNodes: 'DBNodes',
      dbInstType: 'DbInstType',
      endpoints: 'Endpoints',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readMode: 'ReadMode',
      remainDays: 'RemainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBNodes: DescribeDrdsDBClusterResponseBodyDbInstanceDBNodes,
      dbInstType: 'string',
      endpoints: DescribeDrdsDBClusterResponseBodyDbInstanceEndpoints,
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readMode: 'string',
      remainDays: 'string',
    };
  }

  validate() {
    if(this.DBNodes && typeof (this.DBNodes as any).validate === 'function') {
      (this.DBNodes as any).validate();
    }
    if(this.endpoints && typeof (this.endpoints as any).validate === 'function') {
      (this.endpoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponseBodyIpWhiteList extends $dara.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ip)) {
      $dara.Model.validateArray(this.ip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponseBodyDataDb extends $dara.Model {
  /**
   * @remarks
   * The time when the database is created. The value of this parameter is a UNIX timestamp. Unit: ms.
   * 
   * @example
   * 1563773824000
   */
  createTime?: string;
  /**
   * @remarks
   * The type of the database. Valid values: **RDS** and **POLARDB**.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The partitioning mode of the database. Valid values:
   * 
   * *   **HORIZONTAL**: The database is horizontally partitioned.
   * *   **VERTICAL**: The database is vertically partitioned.
   * 
   * @example
   * HORIZONTAL
   */
  mode?: string;
  /**
   * @remarks
   * The schema ID that is assigned to the partitioned database.
   * 
   * @example
   * drds_test_1563773871118kxqd
   */
  schema?: string;
  /**
   * @remarks
   * The state of the database.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbInstType: 'DbInstType',
      dbName: 'DbName',
      mode: 'Mode',
      schema: 'Schema',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbInstType: 'string',
      dbName: 'string',
      mode: 'string',
      schema: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponseBodyData extends $dara.Model {
  db?: DescribeDrdsDBsResponseBodyDataDb[];
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: { 'type': 'array', 'itemType': DescribeDrdsDBsResponseBodyDataDb },
    };
  }

  validate() {
    if(Array.isArray(this.db)) {
      $dara.Model.validateArray(this.db);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstancesReadOnlyInstance extends $dara.Model {
  /**
   * @remarks
   * The URL used to connect to the read-only instance.
   * 
   * @example
   * rm-bp1ub71ct9skc3yxx.mysql.rds.aliyuncs.com
   */
  connectUrl?: string;
  /**
   * @remarks
   * The ID of the read-only instance.
   * 
   * @example
   * rm-bp1ub71ct9skc****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The state of the read-only instance.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The role of the read-only instance.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * dm-*************
   */
  dmInstanceId?: string;
  /**
   * @remarks
   * The engine of the database that is run on the read-only instance.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The engine version of the database that is run on the read-only instance.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The timestamp that indicates when the read-only instance expires.
   * 
   * @example
   * 1823487328173
   */
  expireTime?: string;
  /**
   * @remarks
   * The network type of the read-only instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the read-only instance.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The port used to connect to the read-only instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * RDS
   */
  rdsInstType?: string;
  /**
   * @remarks
   * The read ratio of the read-only instance.
   * 
   * @example
   * 30
   */
  readWeight?: number;
  /**
   * @remarks
   * The number of remaining days before the read-only instance expires.
   * 
   * @example
   * 0
   */
  remainDays?: string;
  /**
   * @remarks
   * This parameter is unavailable for read-only instances.
   * 
   * @example
   * 0
   */
  versionAction?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readWeight: 'ReadWeight',
      remainDays: 'RemainDays',
      versionAction: 'VersionAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readWeight: 'number',
      remainDays: 'string',
      versionAction: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstances extends $dara.Model {
  readOnlyInstance?: DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstancesReadOnlyInstance[];
  static names(): { [key: string]: string } {
    return {
      readOnlyInstance: 'ReadOnlyInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyInstance: { 'type': 'array', 'itemType': DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstancesReadOnlyInstance },
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyInstance)) {
      $dara.Model.validateArray(this.readOnlyInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponseBodyDbInstance extends $dara.Model {
  /**
   * @remarks
   * The URL used to connect to the custom ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-***************.mysql.rds.aliyuncs.com
   */
  connectUrl?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The state of the instance.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   **Primary**: The instance is a primary instance.
   * *   **ReadOnly**: The instance is a read-only instance.
   * 
   * @example
   * Primary
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * dm-*************
   */
  dmInstanceId?: string;
  /**
   * @remarks
   * The engine of the database that is run on the instance. Valid value: **MySQL**.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The engine version of the database that is run on the instance. Valid values: **5.7**.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the custom ApsaraDB RDS for MySQL instance expires. The value of this parameter is a UNIX timestamp. Unit: seconds.
   * 
   * >  This parameter is returned only when the custom ApsaraDB RDS for MySQL instance is a subscription instance.
   * 
   * @example
   * 12341434315
   */
  expireTime?: string;
  /**
   * @remarks
   * The type of the network. Valid values: **VPC**.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the custom ApsaraDB RDS for MySQL instance. Valid values:
   * 
   * *   **Prepaid**: subscription
   * *   **Postaid**: pay-as-you-go
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The port used to connect to the custom ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * RDS
   */
  rdsInstType?: string;
  /**
   * @remarks
   * The list of read-only ApsaraDB RDS for MySQL instances.
   */
  readOnlyInstances?: DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstances;
  /**
   * @remarks
   * The read ratio of the instance.
   * 
   * @example
   * 70
   */
  readWeight?: number;
  /**
   * @remarks
   * The number of remaining days before the instance expires.
   * 
   * @example
   * 0
   */
  remainDays?: string;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readOnlyInstances: 'ReadOnlyInstances',
      readWeight: 'ReadWeight',
      remainDays: 'RemainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readOnlyInstances: DescribeDrdsDbInstanceResponseBodyDbInstanceReadOnlyInstances,
      readWeight: 'number',
      remainDays: 'string',
    };
  }

  validate() {
    if(this.readOnlyInstances && typeof (this.readOnlyInstances as any).validate === 'function') {
      (this.readOnlyInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstancesReadOnlyInstance extends $dara.Model {
  /**
   * @remarks
   * Indicates the endpoint that is used to connect to the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * rm-bp1t1mk5a5b******.mysql.rds.aliyuncs.com
   */
  connectUrl?: string;
  /**
   * @remarks
   * Indicates the state of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database. Valid values:
   * 
   * *   **0**: The ApsaraDB RDS for MySQL instance is being created.
   * *   **1**: The ApsaraDB RDS for MySQL instance is running.
   * *   **3**: The ApsaraDB RDS for MySQL instance is being deleted.
   * *   **5**: The ApsaraDB RDS for MySQL instance is being restarted.
   * *   **6**: The ApsaraDB RDS for MySQL instance is being upgraded or downgraded.
   * *   **7**: The ApsaraDB RDS for MySQL instance is being backed up.
   * *   **8**: The network type of the ApsaraDB RDS for MySQL instance is being changed.
   * *   **9**: The ApsaraDB RDS for MySQL instance is being migrated.
   * *   **11**: The data of the ApsaraDB RDS for MySQL instance is being migrated.
   * *   **12**: A disaster-recovery instance is being generated.
   * *   **13**: Data is being imported to the ApsaraDB RDS for MySQL instance.
   * *   **14**: Data is being imported to the ApsaraDB RDS for MySQL instance from an another ApsaraDB RDS for MySQL instance.
   * *   **15**: A failover is being performed.
   * *   **16**: A temporary instance is being created.
   * *   **17**: A network is being created for the ApsaraDB RDS for MySQL instance.
   * *   **18**: The ApsaraDB RDS for MySQL instance is being cloned.
   * *   **19**: The link is being changed.
   * *   **20**: The read-only instances of the ApsaraDB RDS for MySQL instance are being migrated.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * Indicates the type of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database. The value is set to RDS.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * Indicates the ID of a resource.
   * 
   * @example
   * dm-hbgau1zp****
   */
  dmInstanceId?: string;
  /**
   * @remarks
   * Indicates the engine of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * Indicates the engine version of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * Indicates the timestamp when the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database expires.
   * 
   * @example
   * 123421352351234
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates the name of a read-only instance.
   * 
   * @example
   * **
   */
  instanceName?: string;
  /**
   * @remarks
   * Indicates the network type of the read-only instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * Indicates the billing method of the read-only instance.
   * 
   * *   **drdsPre**: The instance uses the subscription billing method.
   * *   **drdsPost**: The instance uses the pay-as-you-go billing method.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * Indicates the port that is used to connect to the read-only instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * Indicates the type of the read-only instance.
   * 
   * @example
   * RDS
   */
  rdsInstType?: string;
  /**
   * @remarks
   * Indicates the read weight of the read-only instance.
   * 
   * @example
   * 70
   */
  readWeight?: number;
  /**
   * @remarks
   * Indicates the number of remaining days before the read-only instance expires.
   * 
   * @example
   * 0
   */
  remainDays?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceStatus: 'DBInstanceStatus',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      instanceName: 'InstanceName',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readWeight: 'ReadWeight',
      remainDays: 'RemainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceStatus: 'string',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      instanceName: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readWeight: 'number',
      remainDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstances extends $dara.Model {
  readOnlyInstance?: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstancesReadOnlyInstance[];
  static names(): { [key: string]: string } {
    return {
      readOnlyInstance: 'ReadOnlyInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyInstance: { 'type': 'array', 'itemType': DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstancesReadOnlyInstance },
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyInstance)) {
      $dara.Model.validateArray(this.readOnlyInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstance extends $dara.Model {
  /**
   * @remarks
   * Indicates the endpoint that is used to connect to an ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * rm-bp1t1mk5a5b******.mysql.rds.aliyuncs.com
   */
  connectUrl?: string;
  /**
   * @remarks
   * Indicates the ID of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * rm-bp1t1mk5a5bdj****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Indicates the state of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database. Valid values:
   * 
   * *   **0**: The ApsaraDB RDS for MySQL instance is being created.
   * *   **1**: The ApsaraDB RDS for MySQL instance is running.
   * *   **3**: The ApsaraDB RDS for MySQL instance is being deleted.
   * *   **5**: The ApsaraDB RDS for MySQL instance is being restarted.
   * *   **6**: The ApsaraDB RDS for MySQL instance is being upgraded or downgraded.
   * *   **7**: The ApsaraDB RDS for MySQL instance is being backed up.
   * *   **8**: The network type of the ApsaraDB RDS for MySQL instance is being changed.
   * *   **9**: The ApsaraDB RDS for MySQL instance is being migrated.
   * *   **11**: The data of the ApsaraDB RDS for MySQL instance is being migrated.
   * *   **12**: A disaster-recovery instance is being generated.
   * *   **13**: Data is being imported to the ApsaraDB RDS for MySQL instance.
   * *   **14**: Data is being imported to the ApsaraDB RDS for MySQL instance from an another ApsaraDB RDS for MySQL instance.
   * *   **15**: A failover is being performed.
   * *   **16**: A temporary instance is being created.
   * *   **17**: A network is being created for the ApsaraDB RDS for MySQL instance.
   * *   **18**: The ApsaraDB RDS for MySQL instance is being cloned.
   * *   **19**: The link is being changed.
   * *   **20**: The read-only instances of the ApsaraDB RDS for MySQL instance are being migrated.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * Indicates the type of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database. The value is set to RDS.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * Indicates the ID of a resource.
   * 
   * @example
   * dm-hbgau1zp****
   */
  dmInstanceId?: string;
  /**
   * @remarks
   * Indicates the engine of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * Indicates the engine version of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * Indicates the point in time when the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database expires.
   * 
   * @example
   * 1237486127634
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates the network type of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * Indicates the billing method of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database. Valid values:
   * 
   * *   **drdsPre**: The instance uses the subscription billing method.
   * *   **drdsPost**: The instance uses the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * Indicates the port that is used to connect to the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * Indicates whether the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database is a primary instance or a read-only instance.
   * 
   * *   **Primary**: The instance is a primary instance.
   * *   **Readonly**: The instance is a read-only instance.
   * 
   * @example
   * Primary
   */
  rdsInstType?: string;
  /**
   * @remarks
   * Indicates information about the read-only instances of the ApsaraDB RDS for MySQL instance that is used to store the data of the specified database.
   */
  readOnlyInstances?: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstances;
  /**
   * @remarks
   * Indicates the read weight of the read-only instance.
   * 
   * @example
   * 30
   */
  readWeight?: number;
  /**
   * @remarks
   * Indicates the number of remaining days before a subscription instance expires.
   * 
   * @example
   * 0
   */
  remainDays?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readOnlyInstances: 'ReadOnlyInstances',
      readWeight: 'ReadWeight',
      remainDays: 'RemainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readOnlyInstances: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstanceReadOnlyInstances,
      readWeight: 'number',
      remainDays: 'number',
    };
  }

  validate() {
    if(this.readOnlyInstances && typeof (this.readOnlyInstances as any).validate === 'function') {
      (this.readOnlyInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponseBodyDbInstances extends $dara.Model {
  dbInstance?: DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstance[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': DescribeDrdsDbInstancesResponseBodyDbInstancesDbInstance },
    };
  }

  validate() {
    if(Array.isArray(this.dbInstance)) {
      $dara.Model.validateArray(this.dbInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbRdsNameListResponseBodyInstanceNameList extends $dara.Model {
  instanceName?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceName)) {
      $dara.Model.validateArray(this.instanceName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyDataReadOnlyDBInstanceIds extends $dara.Model {
  readOnlyDBInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyDBInstanceId)) {
      $dara.Model.validateArray(this.readOnlyDBInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyDataVipsVip extends $dara.Model {
  /**
   * @remarks
   * The domain name that is mapped to the VIP.
   * 
   * @example
   * drdssen1243as.drds.aliyuncs.com
   */
  dns?: string;
  /**
   * @remarks
   * The number of remaining days before the VIP expires.
   * 
   * @example
   * 0
   */
  expireDays?: number;
  /**
   * @remarks
   * The ports that are opened on the VIP.
   * 
   * @example
   * 3306
   */
  port?: string;
  removeWeight?: boolean;
  /**
   * @remarks
   * The type of the VIP. Valid values: intranet and internet.
   * 
   * @example
   * intranet
   */
  type?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp**********
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp***********
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      dns: 'Dns',
      expireDays: 'ExpireDays',
      port: 'Port',
      removeWeight: 'RemoveWeight',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dns: 'string',
      expireDays: 'number',
      port: 'string',
      removeWeight: 'boolean',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyDataVips extends $dara.Model {
  vip?: DescribeDrdsInstanceResponseBodyDataVipsVip[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': DescribeDrdsInstanceResponseBodyDataVipsVip },
    };
  }

  validate() {
    if(Array.isArray(this.vip)) {
      $dara.Model.validateArray(this.vip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * @example
   * drdsPost
   */
  commodityCode?: string;
  /**
   * @remarks
   * The timestamp that indicates when the instance is created.
   * 
   * @example
   * 1568620311000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * drds_test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * drdssen1243as
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the instance expires.
   * 
   * @example
   * 4724323200000
   */
  expireDate?: number;
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   **MASTER**: The instance is a primary instance.
   * *   **SLAVE**: The instance is a read-only instance to analyze complex queries
   * *   **SLAVE_FLOW**: The instance is a read-only instance for high-concurrency scenarios
   * 
   * @example
   * MASTER
   */
  instRole?: string;
  /**
   * @remarks
   * The instance series of the instance.
   * 
   * @example
   * drds.sn2.4c16g
   */
  instanceSeries?: string;
  /**
   * @remarks
   * The specification of the instance.
   * 
   * @example
   * drds.sn2.4c16g.8C32G
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The tag of the instance. Valid values:
   * 
   * *   **NORMAL**: The instance is a standard instance.
   * *   **HA**: The instance is a high-availability (HA) instance.
   * *   **VPC**: The instance is a VPC-based instance.
   * 
   * @example
   * NORMAL
   */
  label?: string;
  /**
   * @remarks
   * The machine type of the instance. The value of this parameter is **ecs**.
   * 
   * @example
   * ecs
   */
  machineType?: string;
  /**
   * @remarks
   * The ID of the primary instance.
   * 
   * >  This parameter is returned only when the instance is a primary instance.
   * 
   * @example
   * drdssen1243as
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The MySQL version that is supported by the instance.
   * 
   * @example
   * 5
   */
  mysqlVersion?: number;
  /**
   * @remarks
   * The network type of the instance. Valid values: CLASSIC and VPC.
   * 
   * @example
   * CLASSIC
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the purchased instance.
   * 
   * @example
   * drdssen12****
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The version of .
   * 
   * @example
   * 5.3.*
   */
  productVersion?: string;
  /**
   * @remarks
   * The details about each read-only instance that is associated with the instance.
   */
  readOnlyDBInstanceIds?: DescribeDrdsInstanceResponseBodyDataReadOnlyDBInstanceIds;
  /**
   * @remarks
   * The ID of the region in which the instance is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. The value of this parameter can be null.
   * 
   * @example
   * NULL
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the instance.
   * 
   * @example
   * RUN
   */
  status?: string;
  /**
   * @remarks
   * The type of the instance used for storage.
   * 
   * @example
   * RDS
   */
  storageType?: string;
  /**
   * @remarks
   * The type of the instance. Valid values: PRIVATE and PUBLIC. The value of PRIVATE indicates that the instance is a dedicated instance. The value of PUBLIC indicates that the instance is a shared instance.
   * 
   * @example
   * PRIVATE
   */
  type?: string;
  /**
   * @remarks
   * The version of the instance. The value of this parameter is 0.
   * 
   * @example
   * 0
   */
  version?: number;
  /**
   * @remarks
   * Indicates whether the version of the instance can be upgraded.
   * 
   * @example
   * Upgradeable
   */
  versionAction?: string;
  /**
   * @remarks
   * The list of returned virtual IP addresses (VIPs).
   */
  vips?: DescribeDrdsInstanceResponseBodyDataVips;
  /**
   * @remarks
   * The ID of the instance that is deployed in the VPC.
   * 
   * @example
   * drdssen12****
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * The ID of the zone in which the instance is located.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
      expireDate: 'ExpireDate',
      instRole: 'InstRole',
      instanceSeries: 'InstanceSeries',
      instanceSpec: 'InstanceSpec',
      label: 'Label',
      machineType: 'MachineType',
      masterInstanceId: 'MasterInstanceId',
      mysqlVersion: 'MysqlVersion',
      networkType: 'NetworkType',
      orderInstanceId: 'OrderInstanceId',
      productVersion: 'ProductVersion',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      storageType: 'StorageType',
      type: 'Type',
      version: 'Version',
      versionAction: 'VersionAction',
      vips: 'Vips',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'number',
      description: 'string',
      drdsInstanceId: 'string',
      expireDate: 'number',
      instRole: 'string',
      instanceSeries: 'string',
      instanceSpec: 'string',
      label: 'string',
      machineType: 'string',
      masterInstanceId: 'string',
      mysqlVersion: 'number',
      networkType: 'string',
      orderInstanceId: 'string',
      productVersion: 'string',
      readOnlyDBInstanceIds: DescribeDrdsInstanceResponseBodyDataReadOnlyDBInstanceIds,
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      storageType: 'string',
      type: 'string',
      version: 'number',
      versionAction: 'string',
      vips: DescribeDrdsInstanceResponseBodyDataVips,
      vpcCloudInstanceId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.readOnlyDBInstanceIds && typeof (this.readOnlyDBInstanceIds as any).validate === 'function') {
      (this.readOnlyDBInstanceIds as any).validate();
    }
    if(this.vips && typeof (this.vips as any).validate === 'function') {
      (this.vips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBodyDataValues extends $dara.Model {
  /**
   * @remarks
   * The time point when the value of monitoring data was obtained. The value is in the UNIX timestamp format. Unit: ms.
   * 
   * @example
   * 1603162805000
   */
  date?: number;
  /**
   * @remarks
   * The data value.
   * 
   * @example
   * 0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
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

export class DescribeDrdsInstanceDbMonitorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the monitoring metric.
   * 
   * @example
   * qps
   */
  key?: string;
  /**
   * @remarks
   * The unit of the monitoring metric.
   * 
   * @example
   * qps
   */
  unit?: string;
  /**
   * @remarks
   * The details about the value of monitoring data.
   */
  values?: DescribeDrdsInstanceDbMonitorResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      values: { 'type': 'array', 'itemType': DescribeDrdsInstanceDbMonitorResponseBodyDataValues },
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

export class DescribeDrdsInstanceLevelTasksResponseBodyTasksTask extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task can be canceled.
   * 
   * @example
   * false
   */
  allowCancel?: boolean;
  /**
   * @remarks
   * The error message returned for the task.
   */
  errMsg?: string;
  /**
   * @remarks
   * The timestamp when the task is created.
   * 
   * @example
   * 1568705520000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The progress of the task. Valid values: 0 to 100.
   * 
   * @example
   * 99
   */
  progress?: number;
  /**
   * @remarks
   * The description of the task progress.
   */
  progressDescription?: string;
  /**
   * @remarks
   * Indicates whether the progress of the task is displayed.
   * 
   * @example
   * true
   */
  showProgress?: boolean;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 12312
   */
  targetId?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * upgrade_instance
   */
  taskName?: string;
  /**
   * @remarks
   * The phase of the task.
   * 
   * @example
   * 1
   */
  taskPhase?: string;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   0: The task is being executed.
   * *   1: The task is executed.
   * *   2: The task failed to be executed.
   * *   3: The task is canceled.
   * 
   * @example
   * 0
   */
  taskStatus?: number;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * 11
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      errMsg: 'ErrMsg',
      gmtCreate: 'GmtCreate',
      progress: 'Progress',
      progressDescription: 'ProgressDescription',
      showProgress: 'ShowProgress',
      targetId: 'TargetId',
      taskName: 'TaskName',
      taskPhase: 'TaskPhase',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'boolean',
      errMsg: 'string',
      gmtCreate: 'number',
      progress: 'number',
      progressDescription: 'string',
      showProgress: 'boolean',
      targetId: 'number',
      taskName: 'string',
      taskPhase: 'string',
      taskStatus: 'number',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceLevelTasksResponseBodyTasks extends $dara.Model {
  task?: DescribeDrdsInstanceLevelTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDrdsInstanceLevelTasksResponseBodyTasksTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBodyDataValues extends $dara.Model {
  /**
   * @remarks
   * The point in time when the value of the metric was collected. The value is in the UNIX timestamp format. The timestamp is displayed in UTC. Unit: ms.
   * 
   * @example
   * 1603163400000
   */
  date?: number;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1.40
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
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

export class DescribeDrdsInstanceMonitorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * cpu
   */
  key?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  nodeNum?: number;
  /**
   * @remarks
   * The unit of the metric value.
   * 
   * @example
   * %
   */
  unit?: string;
  /**
   * @remarks
   * The details of the monitoring data of the metric.
   */
  values?: DescribeDrdsInstanceMonitorResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nodeNum: 'NodeNum',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nodeNum: 'number',
      unit: 'string',
      values: { 'type': 'array', 'itemType': DescribeDrdsInstanceMonitorResponseBodyDataValues },
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

export class DescribeDrdsInstanceVersionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current version of the instance.
   * 
   * @example
   * 5.3.12-15682777
   */
  instanceVersion?: string;
  /**
   * @remarks
   * The latest version of the instance.
   * 
   * @example
   * 5.4.12-16315258
   */
  newestVersion?: string;
  static names(): { [key: string]: string } {
    return {
      instanceVersion: 'InstanceVersion',
      newestVersion: 'NewestVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceVersion: 'string',
      newestVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag configured for the instances you want to query.
   * 
   * @example
   * acs:newretail:domain
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag configured for the instances you want to query.
   * 
   * @example
   * NEW_RETAIL
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

export class DescribeDrdsInstancesResponseBodyInstancesInstanceReadOnlyDBInstanceIds extends $dara.Model {
  readOnlyDBInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyDBInstanceId)) {
      $dara.Model.validateArray(this.readOnlyDBInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstancesInstanceVipsVip extends $dara.Model {
  /**
   * @remarks
   * The virtual IP address.
   * 
   * @example
   * 10.23.***.***
   */
  IP?: string;
  /**
   * @remarks
   * The ports that are opened on the VIP.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The type of the VIP. Valid values:
   * 
   * *   intranet: a private IP address
   * *   internet: a public IP address
   * 
   * @example
   * intranet
   */
  type?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bpxxxxxxxxxxxy
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bpxxxxxxxxxxxxx96
   */
  vswitchId?: string;
  /**
   * @remarks
   * The domain name that is mapped to the VIP.
   * 
   * @example
   * drdssen1243as.drds.aliyuncs.com
   */
  dns?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      port: 'Port',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      dns: 'dns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      port: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      dns: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstancesInstanceVips extends $dara.Model {
  vip?: DescribeDrdsInstancesResponseBodyInstancesInstanceVipsVip[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': DescribeDrdsInstancesResponseBodyInstancesInstanceVipsVip },
    };
  }

  validate() {
    if(Array.isArray(this.vip)) {
      $dara.Model.validateArray(this.vip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the service.
   * 
   * @example
   * drdsPost
   */
  commodityCode?: string;
  /**
   * @remarks
   * The timestamp that indicates when the instance is created.
   * 
   * @example
   * 1568620311000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * drds_test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * drdssen12****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The timestamp that indicates when the instance expires.
   * 
   * @example
   * 4724323200000
   */
  expireDate?: number;
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   MASTER: The instance is a primary instance.
   * *   SLAVE: The instance is a read-only instance to analyze complex queries.
   * *   SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
   * 
   * @example
   * MASTER
   */
  instRole?: string;
  /**
   * @remarks
   * The instance series.
   * 
   * @example
   * drds.sn2.4c16g
   */
  instanceSeries?: string;
  /**
   * @remarks
   * The specification of the instance.
   * 
   * @example
   * drds.sn2.4c16g.8C32G
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The tag of the instance. Valid values:
   * 
   * *   **NORMAL**: The instance is a standard instance.
   * *   **HA**: The instance is a high-availability (HA) instance.
   * *   **VPC**: The instance is a VPC-based instance.
   * 
   * @example
   * NORMAL
   */
  label?: string;
  /**
   * @remarks
   * The machine type of the instance. Valid value: ecs.
   * 
   * @example
   * ecs
   */
  machineType?: string;
  /**
   * @remarks
   * The ID of the primary instance.
   * 
   * @example
   * drdssen12****
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **CLASSIC**
   * *   **VPC**
   * 
   * @example
   * CLASSIC
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the purchased instance.
   * 
   * @example
   * drdssen12****
   */
  orderInstanceId?: string;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * V1
   */
  productVersion?: string;
  /**
   * @remarks
   * The IDs of read-only instances that are associated with the instance.
   */
  readOnlyDBInstanceIds?: DescribeDrdsInstancesResponseBodyInstancesInstanceReadOnlyDBInstanceIds;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou-e
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aek2ljh3ye4****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * RUN
   */
  status?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * *   **PUBLIC**: The returned instance is a shared instance.
   * *   **PRIVATE**: The returned instance is a dedicated instance.
   * 
   * @example
   * PRIVATE
   */
  type?: string;
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * 0
   */
  version?: number;
  /**
   * @remarks
   * Indicates whether the version of the instance can be upgraded.
   * 
   * @example
   * Upgradable
   */
  versionAction?: string;
  /**
   * @remarks
   * The list of returned virtual IP addresses (VIPs).
   */
  vips?: DescribeDrdsInstancesResponseBodyInstancesInstanceVips;
  /**
   * @remarks
   * The ID of the instance that is deployed in the VPC.
   * 
   * @example
   * drdssen12****
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * vpc-bp**********
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone in which the resource is located.
   * 
   * @example
   * vsw-bpxxxxxxxxxxxxx96
   */
  zoneId?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values:
   * 
   * *   **starter**: Starter Edition
   * *   **enterprise**: Enterprise Edition
   * *   **standard**: Standard Edition
   * 
   * @example
   * enterprise
   */
  series?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
      expireDate: 'ExpireDate',
      instRole: 'InstRole',
      instanceSeries: 'InstanceSeries',
      instanceSpec: 'InstanceSpec',
      label: 'Label',
      machineType: 'MachineType',
      masterInstanceId: 'MasterInstanceId',
      networkType: 'NetworkType',
      orderInstanceId: 'OrderInstanceId',
      productVersion: 'ProductVersion',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      type: 'Type',
      version: 'Version',
      versionAction: 'VersionAction',
      vips: 'Vips',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      series: 'series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'number',
      description: 'string',
      drdsInstanceId: 'string',
      expireDate: 'number',
      instRole: 'string',
      instanceSeries: 'string',
      instanceSpec: 'string',
      label: 'string',
      machineType: 'string',
      masterInstanceId: 'string',
      networkType: 'string',
      orderInstanceId: 'string',
      productVersion: 'string',
      readOnlyDBInstanceIds: DescribeDrdsInstancesResponseBodyInstancesInstanceReadOnlyDBInstanceIds,
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      type: 'string',
      version: 'number',
      versionAction: 'string',
      vips: DescribeDrdsInstancesResponseBodyInstancesInstanceVips,
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      zoneId: 'string',
      series: 'string',
    };
  }

  validate() {
    if(this.readOnlyDBInstanceIds && typeof (this.readOnlyDBInstanceIds as any).validate === 'function') {
      (this.readOnlyDBInstanceIds as any).validate();
    }
    if(this.vips && typeof (this.vips as any).validate === 'function') {
      (this.vips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyInstances extends $dara.Model {
  instance?: DescribeDrdsInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDrdsInstancesResponseBodyInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsParamsResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of the database.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates whether a restart is required.
   * 
   * @example
   * true
   */
  needRestart?: boolean;
  /**
   * @remarks
   * Indicates the default value of a parameter.
   * 
   * @example
   * 1000
   */
  paramDefaultValue?: string;
  /**
   * @remarks
   * Indicates the description of the parameter.
   */
  paramDesc?: string;
  /**
   * @remarks
   * Indicates the name of the parameter.
   * 
   * @example
   * SLOW_SQL_TIME
   */
  paramEnglishName?: string;
  /**
   * @remarks
   * Indicates the parameter level.
   * 
   * @example
   * INSTANCE
   */
  paramLevel?: string;
  /**
   * @remarks
   * Indicates the name of the parameter.
   */
  paramName?: string;
  /**
   * @remarks
   * Indicates the value range of the parameter.
   * 
   * @example
   * [1000-900000]
   */
  paramRanges?: string;
  /**
   * @remarks
   * Indicates the type of the parameter.
   * 
   * @example
   * CONFIG
   */
  paramType?: string;
  /**
   * @remarks
   * Indicates the value of the parameter.
   * 
   * @example
   * 1000
   */
  paramValue?: string;
  /**
   * @remarks
   * Indicates the name of the variable.
   * 
   * @example
   * slowSqlTime
   */
  paramVariableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      needRestart: 'NeedRestart',
      paramDefaultValue: 'ParamDefaultValue',
      paramDesc: 'ParamDesc',
      paramEnglishName: 'ParamEnglishName',
      paramLevel: 'ParamLevel',
      paramName: 'ParamName',
      paramRanges: 'ParamRanges',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
      paramVariableName: 'ParamVariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      needRestart: 'boolean',
      paramDefaultValue: 'string',
      paramDesc: 'string',
      paramEnglishName: 'string',
      paramLevel: 'string',
      paramName: 'string',
      paramRanges: 'string',
      paramType: 'string',
      paramValue: 'string',
      paramVariableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsRdsInstancesResponseBodyDbInstancesDbInstance extends $dara.Model {
  /**
   * @remarks
   * The internal endpoint of the custom ApsaraDB RDS for MySQL instance at the storage layer.
   * 
   * @example
   * rm-***************.mysql.rds.aliyuncs.com
   */
  connectUrl?: string;
  /**
   * @remarks
   * The number of CPU cores of the custom ApsaraDB RDS for MySQL instance at the storage layer.
   * 
   * @example
   * 8
   */
  DBInstanceCPU?: string;
  /**
   * @remarks
   * The instance family of the custom ApsaraDB RDS for MySQL instance at the storage layer. Valid values:
   * 
   * *   **x**: general-purpose instance family
   * *   **d**: dedicated instance family
   * *   **h**: dedicated host instance family
   * 
   * @example
   * x
   */
  DBInstanceClassType?: string;
  /**
   * @remarks
   * The ID of the custom ApsaraDB RDS for MySQL instance at the storage layer.
   * 
   * @example
   * rm-*****************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The memory size of the custom ApsaraDB RDS for MySQL instance at the storage layer. Unit: MB.
   * 
   * @example
   * 8192
   */
  DBInstanceMemory?: number;
  /**
   * @remarks
   * The status of the custom ApsaraDB RDS for MySQL instance at the storage layer. Valid values:
   * 
   * *   0: The instance is being created.
   * *   1: The instance is running.
   * *   3: The instance is being deleted.
   * *   5: The instance is being restarted.
   * *   6: The instance is being upgraded or downgraded.
   * *   7: The instance is being backed up.
   * *   8: The network type of the instance is being changed.
   * *   9: The instance is being migrated.
   * *   11: The data stored on the instance is being migrated.
   * *   12: A disaster recovery instance is being generated.
   * *   13: Data is being imported to the instance.
   * *   14: Data is being imported from another RDS instance to the instance.
   * *   15: A switchover is being performed.
   * *   16: A temporary instance is being created.
   * *   17: The network of the instance is being created.
   * *   18: The instance is being cloned.
   * *   19: The link is being changed.
   * *   20: The read-only RDS instances of the instance are being migrated.
   * 
   * @example
   * 1
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The storage space of the custom ApsaraDB RDS for MySQL instance at the storage layer. Unit: GB.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The type of the instance at the storage layer. The value is RDS.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * dm-*************
   */
  dmInstanceId?: string;
  /**
   * @remarks
   * The engine type of the custom ApsaraDB RDS for MySQL instance at the storage layer. The value is MySQL.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The engine version of the custom ApsaraDB RDS for MySQL instance at the storage layer. The value is 8.0.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The lock mode of the RDS instance. Valid values:
   * 
   * 0: The instance is not locked.
   * 
   * 1: The instance is manually locked.
   * 
   * 2: The instance is automatically locked if the instance expires.
   * 
   * 3: The instance is automatically locked if the instance is rolled back.
   * 
   * 4: The instance is automatically locked if the storage space of the instance reaches the upper limit.
   * 
   * 5: The instance is automatically locked if the storage space of the read-only instances reaches the upper limit.
   * 
   * @example
   * 1
   */
  lockMode?: number;
  /**
   * @remarks
   * The reason why the RDS instance is locked.
   * 
   * @example
   * Manually Locked
   */
  lockReason?: string;
  /**
   * @remarks
   * The network type of the custom ApsaraDB RDS for MySQL instance at the storage layer. The value is VPC.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The billing method of the custom ApsaraDB RDS for MySQL instance at the storage layer. Valid values:
   * 
   * *   Postpaid: pay-as-you-go
   * *   Prepaid: subscription
   * 
   * @example
   * PostPaid
   */
  payType?: string;
  /**
   * @remarks
   * The port used to connect to the instance over an internal network.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The type of the custom ApsaraDB RDS for MySQL instance at the storage layer. Valid values:
   * 
   * *   Primary: primary instance
   * *   Readonly: read-only instance
   * 
   * @example
   * Primary
   */
  rdsInstType?: string;
  /**
   * @remarks
   * The read and write weights of the custom ApsaraDB RDS for MySQL instance at the storage layer.
   * 
   * @example
   * 0
   */
  readWeight?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      DBInstanceCPU: 'DBInstanceCPU',
      DBInstanceClassType: 'DBInstanceClassType',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      dbInstType: 'DbInstType',
      dmInstanceId: 'DmInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      networkType: 'NetworkType',
      payType: 'PayType',
      port: 'Port',
      rdsInstType: 'RdsInstType',
      readWeight: 'ReadWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      DBInstanceCPU: 'string',
      DBInstanceClassType: 'string',
      DBInstanceId: 'string',
      DBInstanceMemory: 'number',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      dbInstType: 'string',
      dmInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      lockMode: 'number',
      lockReason: 'string',
      networkType: 'string',
      payType: 'string',
      port: 'number',
      rdsInstType: 'string',
      readWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsRdsInstancesResponseBodyDbInstances extends $dara.Model {
  dbInstance?: DescribeDrdsRdsInstancesResponseBodyDbInstancesDbInstance[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': DescribeDrdsRdsInstancesResponseBodyDbInstancesDbInstance },
    };
  }

  validate() {
    if(Array.isArray(this.dbInstance)) {
      $dara.Model.validateArray(this.dbInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponseBodyShardingDbsShardingDb extends $dara.Model {
  /**
   * @remarks
   * The timeout period for a transaction to wait for the release of the data lock.
   * 
   * @example
   * 5000
   */
  blockingTimeout?: number;
  /**
   * @remarks
   * The URL that is used to access the Apsara RDS for MySQL instance.
   * 
   * @example
   * 100.100.64.100:11569
   */
  connectUrl?: string;
  /**
   * @remarks
   * The properties of the connection string.
   * 
   * @example
   * connectTimeout=3000;autoReconnect=true;failOverReadOnly=false;socketTimeout=900000;rewriteBatchedStatements=true;characterEncoding=utf8
   */
  connectionProperties?: string;
  /**
   * @remarks
   * The ID of the Apsara RDS for MySQL instance that is used as the storage of the database shard.
   * 
   * @example
   * rm-bp1hjzn0yv5j2****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The status of the database.
   * 
   * @example
   * running
   */
  dbStatus?: string;
  /**
   * @remarks
   * The engine of the database.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The name of group on which the database shard is stored.
   * 
   * @example
   * TEMP1_1568171495522SABE_KUP4_0000
   */
  groupName?: string;
  /**
   * @remarks
   * The timeout period of an idle connection.
   * 
   * @example
   * 30
   */
  idleTimeOut?: number;
  /**
   * @remarks
   * The maximum size of the connection pool.
   * 
   * @example
   * 60
   */
  maxPoolSize?: number;
  /**
   * @remarks
   * The minimum size of the connection pool.
   * 
   * @example
   * 5
   */
  minPoolSize?: number;
  /**
   * @remarks
   * The size of cache for the returned results.
   * 
   * @example
   * 0
   */
  preparedStatementCacheSize?: number;
  /**
   * @remarks
   * The name of the database shard.
   * 
   * @example
   * temp1_zhk1_0000
   */
  shardingDbName?: string;
  /**
   * @remarks
   * The username that is used to connect to the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * pg284mi8
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      blockingTimeout: 'BlockingTimeout',
      connectUrl: 'ConnectUrl',
      connectionProperties: 'ConnectionProperties',
      dbInstanceId: 'DbInstanceId',
      dbStatus: 'DbStatus',
      dbType: 'DbType',
      groupName: 'GroupName',
      idleTimeOut: 'IdleTimeOut',
      maxPoolSize: 'MaxPoolSize',
      minPoolSize: 'MinPoolSize',
      preparedStatementCacheSize: 'PreparedStatementCacheSize',
      shardingDbName: 'ShardingDbName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockingTimeout: 'number',
      connectUrl: 'string',
      connectionProperties: 'string',
      dbInstanceId: 'string',
      dbStatus: 'string',
      dbType: 'string',
      groupName: 'string',
      idleTimeOut: 'number',
      maxPoolSize: 'number',
      minPoolSize: 'number',
      preparedStatementCacheSize: 'number',
      shardingDbName: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponseBodyShardingDbs extends $dara.Model {
  shardingDb?: DescribeDrdsShardingDbsResponseBodyShardingDbsShardingDb[];
  static names(): { [key: string]: string } {
    return {
      shardingDb: 'ShardingDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardingDb: { 'type': 'array', 'itemType': DescribeDrdsShardingDbsResponseBodyShardingDbsShardingDb },
    };
  }

  validate() {
    if(Array.isArray(this.shardingDb)) {
      $dara.Model.validateArray(this.shardingDb);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponseBodyItemsItem extends $dara.Model {
  /**
   * @remarks
   * Indicates the IP address of the execution machine.
   * 
   * @example
   * 10.0.***.***
   */
  host?: string;
  /**
   * @remarks
   * Indicates the response time. Unit: ms.
   * 
   * @example
   * 1568267711
   */
  responseTime?: number;
  /**
   * @remarks
   * Indicates the name of the database.
   * 
   * @example
   * user
   */
  schema?: string;
  /**
   * @remarks
   * Indicates the time when the slow SQL query was sent. Unit: ms.
   * 
   * @example
   * 1568267711
   */
  sendTime?: number;
  /**
   * @remarks
   * Indicates the content of the slow SQL query.
   * 
   * @example
   * SELECT   count(1) from   payment_order where   order_status = \\"08\\";
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      responseTime: 'ResponseTime',
      schema: 'Schema',
      sendTime: 'SendTime',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      responseTime: 'number',
      schema: 'string',
      sendTime: 'number',
      sql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponseBodyItems extends $dara.Model {
  item?: DescribeDrdsSlowSqlsResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeDrdsSlowSqlsResponseBodyItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSqlAuditStatusResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates whether the complete report of the SQL audit is supported. Valid values: true and false.
   * 
   * @example
   * true
   */
  detailed?: string;
  /**
   * @remarks
   * Indicates whether the SQL audit feature is enabled for the database. Valid values: true and false.
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * The UID of the external delivery.
   * 
   * > This parameter is returned only if external log delivery is enabled.
   * 
   * @example
   * 111
   */
  extraAliUid?: number;
  /**
   * @remarks
   * The Log Service Logstore from which logs are delivered.
   * 
   * > This parameter is returned only if external log delivery is enabled.
   * 
   * @example
   * test
   */
  extraSlsLogStore?: string;
  /**
   * @remarks
   * The Log Service project from which logs are delivered.
   * 
   * > This parameter is returned only if external log delivery is enabled.
   * 
   * @example
   * test
   */
  extraSlsProject?: string;
  /**
   * @remarks
   * Indicates whether external log delivery is enabled. Valid values: true and false.
   * 
   * @example
   * false
   */
  extraWriteEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      detailed: 'Detailed',
      enabled: 'Enabled',
      extraAliUid: 'ExtraAliUid',
      extraSlsLogStore: 'ExtraSlsLogStore',
      extraSlsProject: 'ExtraSlsProject',
      extraWriteEnabled: 'ExtraWriteEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      detailed: 'string',
      enabled: 'string',
      extraAliUid: 'number',
      extraSlsLogStore: 'string',
      extraSlsProject: 'string',
      extraWriteEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSqlAuditStatusResponseBodyData extends $dara.Model {
  data?: DescribeDrdsSqlAuditStatusResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDrdsSqlAuditStatusResponseBodyDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponseBodyTasksTask extends $dara.Model {
  /**
   * @remarks
   * Indicates the content of a task.
   * 
   * @example
   * upgrade_instance
   */
  content?: string;
  /**
   * @remarks
   * Indicates the ID of the task.
   * 
   * @example
   * 64148
   */
  id?: number;
  /**
   * @remarks
   * Indicates the state of the task.
   * 
   * @example
   * FAILED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponseBodyTasks extends $dara.Model {
  task?: DescribeDrdsTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDrdsTasksResponseBodyTasksTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * Indicates the database sharding key.
   * 
   * @example
   * id
   */
  shardDbKey?: string;
  /**
   * @remarks
   * Indicates the table sharding key.
   * 
   * @example
   * address
   */
  shardTbKey?: string;
  /**
   * @remarks
   * Indicates the name of the table.
   * 
   * @example
   * employee_split2
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      shardDbKey: 'ShardDbKey',
      shardTbKey: 'ShardTbKey',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardDbKey: 'string',
      shardTbKey: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListResponseBodyData extends $dara.Model {
  data?: DescribeExpandLogicTableInfoListResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeExpandLogicTableInfoListResponseBodyDataData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBodyDataListInstanceDbHotDbList extends $dara.Model {
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBodyDataListInstanceDb extends $dara.Model {
  hotDbList?: DescribeHotDbListResponseBodyDataListInstanceDbHotDbList;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * instanceName
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      hotDbList: 'HotDbList',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotDbList: DescribeHotDbListResponseBodyDataListInstanceDbHotDbList,
      instanceName: 'string',
    };
  }

  validate() {
    if(this.hotDbList && typeof (this.hotDbList as any).validate === 'function') {
      (this.hotDbList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBodyDataList extends $dara.Model {
  instanceDb?: DescribeHotDbListResponseBodyDataListInstanceDb[];
  static names(): { [key: string]: string } {
    return {
      instanceDb: 'InstanceDb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDb: { 'type': 'array', 'itemType': DescribeHotDbListResponseBodyDataListInstanceDb },
    };
  }

  validate() {
    if(Array.isArray(this.instanceDb)) {
      $dara.Model.validateArray(this.instanceDb);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the databases on which hot-spot scale-out is performed.
   */
  list?: DescribeHotDbListResponseBodyDataList;
  /**
   * @remarks
   * The random number.
   * 
   * @example
   * jzhz
   */
  randomCode?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      randomCode: 'RandomCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: DescribeHotDbListResponseBodyDataList,
      randomCode: 'string',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbLogInfoResponseBodyLogTimeRange extends $dara.Model {
  /**
   * @remarks
   * The start time of the query time range.
   * 
   * @example
   * 1568267711
   */
  supportLatestTime?: number;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 1568367711
   */
  supportOldestTime?: number;
  static names(): { [key: string]: string } {
    return {
      supportLatestTime: 'SupportLatestTime',
      supportOldestTime: 'SupportOldestTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportLatestTime: 'number',
      supportOldestTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbSlsInfoResponseBodyAuditInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the LogStore.
   * 
   * @example
   * test
   */
  logStore?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * test
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivilegesDbPrivilege extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of a database.
   * 
   * @example
   * test_rds3
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates the permissions that an account is granted on the database. Valid values:
   * 
   * *   **R**: The account is granted the permissions that are required to read the data of the database.
   * *   **W**: The account is granted the permissions that are required to write data to the database.
   * *   **DDL**: The account is granted the permissions that are required to perform DDL operations on the database.
   * *   **DML**: The account is granted the permissions that are required to perform DML operations on the database.
   * 
   * @example
   * R
   */
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      privilege: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivileges extends $dara.Model {
  dbPrivilege?: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivilegesDbPrivilege[];
  static names(): { [key: string]: string } {
    return {
      dbPrivilege: 'DbPrivilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbPrivilege: { 'type': 'array', 'itemType': DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivilegesDbPrivilege },
    };
  }

  validate() {
    if(Array.isArray(this.dbPrivilege)) {
      $dara.Model.validateArray(this.dbPrivilege);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccount extends $dara.Model {
  /**
   * @remarks
   * Indicates the username of an instance account.
   * 
   * @example
   * test_rds3
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates the type of an instance account. Valid values:
   * 
   * *   **0**: The instance account is a privileged account.
   * *   **1**: The instance account is a standard account.
   * 
   * @example
   * 1
   */
  accountType?: number;
  /**
   * @remarks
   * Indicates the information about the permissions of an account on a database.
   */
  dbPrivileges?: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivileges;
  /**
   * @remarks
   * Indicates the description of an account. By default, if 0 is the value of the AccountType parameter, **Created by DRDS** is returned as the value of the Description parameter. If 1 is the value of the AccountType parameter, an empty string is returned as the value of the Description parameter. You can modify the description of an account on the Accounts page in the PolarDB-X console.
   * 
   * @example
   * Created by DRDS
   */
  description?: string;
  /**
   * @remarks
   * Indicates an IP address that is allowed to access the database. The value **%** indicates that each IP address is allowed to access the database. \\</note>
   * 
   * @example
   * %
   */
  host?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      dbPrivileges: 'DbPrivileges',
      description: 'Description',
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'number',
      dbPrivileges: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccountDbPrivileges,
      description: 'string',
      host: 'string',
    };
  }

  validate() {
    if(this.dbPrivileges && typeof (this.dbPrivileges as any).validate === 'function') {
      (this.dbPrivileges as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBodyInstanceAccounts extends $dara.Model {
  instanceAccount?: DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccount[];
  static names(): { [key: string]: string } {
    return {
      instanceAccount: 'InstanceAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAccount: { 'type': 'array', 'itemType': DescribeInstanceAccountsResponseBodyInstanceAccountsInstanceAccount },
    };
  }

  validate() {
    if(Array.isArray(this.instanceAccount)) {
      $dara.Model.validateArray(this.instanceAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneResponseBodyResultTargetAzones extends $dara.Model {
  targetAzone?: string[];
  static names(): { [key: string]: string } {
    return {
      targetAzone: 'TargetAzone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetAzone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetAzone)) {
      $dara.Model.validateArray(this.targetAzone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the source azoneId.
   * 
   * @example
   * cn-hangzhou-a
   */
  originAzoneId?: string;
  /**
   * @remarks
   * regionId.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the job can be switched.
   * 
   * @example
   * true
   */
  switchAble?: boolean;
  /**
   * @remarks
   * Target azones.
   */
  targetAzones?: DescribeInstanceSwitchAzoneResponseBodyResultTargetAzones;
  static names(): { [key: string]: string } {
    return {
      originAzoneId: 'OriginAzoneId',
      regionId: 'RegionId',
      switchAble: 'SwitchAble',
      targetAzones: 'TargetAzones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originAzoneId: 'string',
      regionId: 'string',
      switchAble: 'boolean',
      targetAzones: DescribeInstanceSwitchAzoneResponseBodyResultTargetAzones,
    };
  }

  validate() {
    if(this.targetAzones && typeof (this.targetAzones as any).validate === 'function') {
      (this.targetAzones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfosVswitchInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the zone in which the instance is deployed.
   * 
   * @example
   * cn-hangzhou-a
   */
  azoneId?: string;
  /**
   * @remarks
   * Indicates whether you can change the network type of the instance.
   * 
   * @example
   * true
   */
  drdsSupported?: boolean;
  /**
   * @remarks
   * Indicates the ID of the VPC.
   * 
   * @example
   * vpc_id
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates the ID of the vSwitch.
   * 
   * @example
   * vswitch_id
   */
  vswitchId?: string;
  /**
   * @remarks
   * Indicates the name of the vSwitch.
   * 
   * @example
   * vswitch_name
   */
  vswitchName?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      drdsSupported: 'DrdsSupported',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      vswitchName: 'VswitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      drdsSupported: 'boolean',
      vpcId: 'string',
      vswitchId: 'string',
      vswitchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfos extends $dara.Model {
  vswitchInfo?: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfosVswitchInfo[];
  static names(): { [key: string]: string } {
    return {
      vswitchInfo: 'VswitchInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchInfo: { 'type': 'array', 'itemType': DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfosVswitchInfo },
    };
  }

  validate() {
    if(Array.isArray(this.vswitchInfo)) {
      $dara.Model.validateArray(this.vswitchInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the region in which the instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates the ID of the VPC.
   * 
   * @example
   * vpc_id
   */
  vpcId?: string;
  /**
   * @remarks
   * Indicates the name of the VPC.
   * 
   * @example
   * vpc_name
   */
  vpcName?: string;
  /**
   * @remarks
   * Indicates information about the vSwitch to which the instance is connected.
   */
  vswitchInfos?: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfos;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vswitchInfos: 'VswitchInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vswitchInfos: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfoVswitchInfos,
    };
  }

  validate() {
    if(this.vswitchInfos && typeof (this.vswitchInfos as any).validate === 'function') {
      (this.vswitchInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBodyVpcInfos extends $dara.Model {
  vpcInfo?: DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfo[];
  static names(): { [key: string]: string } {
    return {
      vpcInfo: 'VpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcInfo: { 'type': 'array', 'itemType': DescribeInstanceSwitchNetworkResponseBodyVpcInfosVpcInfo },
    };
  }

  validate() {
    if(Array.isArray(this.vpcInfo)) {
      $dara.Model.validateArray(this.vpcInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems extends $dara.Model {
  /**
   * @remarks
   * Indicates the error code that is returned by a subtask.
   * 
   * @example
   * 1004
   */
  errorMsgCode?: string;
  /**
   * @remarks
   * Indicates an error message.
   */
  errorMsgParams?: string[];
  /**
   * @remarks
   * Indicates the name of the subtask.
   */
  preCheckItemName?: string;
  /**
   * @remarks
   * Indicates the state of the subtask.
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsgCode: 'ErrorMsgCode',
      errorMsgParams: 'ErrorMsgParams',
      preCheckItemName: 'PreCheckItemName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsgCode: 'string',
      errorMsgParams: { 'type': 'array', 'itemType': 'string' },
      preCheckItemName: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorMsgParams)) {
      $dara.Model.validateArray(this.errorMsgParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultResponseBodyPreCheckResult extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of the precheck task.
   */
  preCheckName?: string;
  /**
   * @remarks
   * Indicates the state of the precheck task.
   * 
   * @example
   * FAIL
   */
  state?: string;
  /**
   * @remarks
   * Indicates the details about the subtasks of the precheck task.
   */
  subCheckItems?: DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems[];
  static names(): { [key: string]: string } {
    return {
      preCheckName: 'PreCheckName',
      state: 'State',
      subCheckItems: 'SubCheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckName: 'string',
      state: 'string',
      subCheckItems: { 'type': 'array', 'itemType': DescribePreCheckResultResponseBodyPreCheckResultSubCheckItems },
    };
  }

  validate() {
    if(Array.isArray(this.subCheckItems)) {
      $dara.Model.validateArray(this.subCheckItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponseBodyDataValues extends $dara.Model {
  /**
   * @remarks
   * The time point when the value of the monitoring metric was obtained. The value is in the UNIX timestamp format. The time is displayed in UTC. Unit: ms.
   * 
   * @example
   * 1603209660000
   */
  date?: number;
  /**
   * @remarks
   * The value of the monitoring metric.
   * 
   * @example
   * 0.58
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
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

export class DescribeRDSPerformanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the monitoring metric.
   * 
   * @example
   * cpuusage
   */
  key?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * >  This parameter is returned only when the storage type of the database is PolarDB for MySQL. If the storage type of the database is ApsaraDB RDS for MySQL, this parameter is not returned.
   * 
   * @example
   * pi-*************
   */
  nodeName?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  nodeNum?: number;
  /**
   * @remarks
   * The unit of the monitoring metric.
   * 
   * @example
   * %
   */
  unit?: string;
  /**
   * @remarks
   * The details of the monitoring metric data.
   */
  values?: DescribeRDSPerformanceResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nodeName: 'NodeName',
      nodeNum: 'NodeNum',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nodeName: 'string',
      nodeNum: 'number',
      unit: 'string',
      values: { 'type': 'array', 'itemType': DescribeRDSPerformanceResponseBodyDataValues },
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

export class DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos extends $dara.Model {
  /**
   * @remarks
   * The number of active sessions of the RDS instance.
   * 
   * @example
   * 0
   */
  activeSessions?: number;
  /**
   * @remarks
   * The CPU utilization of an RDS instance.
   * 
   * @example
   * 0.26
   */
  cpu?: number;
  /**
   * @remarks
   * The IOPS of the RDS instance.
   * 
   * @example
   * 17.62
   */
  iops?: number;
  /**
   * @remarks
   * The ID of an RDS instance.
   * 
   * @example
   * rm-**************
   */
  rdsId?: string;
  /**
   * @remarks
   * The disk usage of apsaradb for RDS. Unit: MB.
   * 
   * @example
   * 4145144777
   */
  spaceUsage?: number;
  /**
   * @remarks
   * The total number of current RDS sessions.
   * 
   * @example
   * 162
   */
  totalSessions?: number;
  static names(): { [key: string]: string } {
    return {
      activeSessions: 'ActiveSessions',
      cpu: 'Cpu',
      iops: 'Iops',
      rdsId: 'RdsId',
      spaceUsage: 'SpaceUsage',
      totalSessions: 'TotalSessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessions: 'number',
      cpu: 'number',
      iops: 'number',
      rdsId: 'string',
      spaceUsage: 'number',
      totalSessions: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsSuperAccountInstancesResponseBodyDbInstances extends $dara.Model {
  dbInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dbInstance)) {
      $dara.Model.validateArray(this.dbInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecycleBinTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the table was created.
   * 
   * @example
   * 2019-09-16 14:42:06
   */
  createTime?: string;
  /**
   * @remarks
   * The original name of the table.
   * 
   * @example
   * BIN_T4AG3CY5WWXPKHITCHJY
   */
  originalTableName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      originalTableName: 'OriginalTableName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      originalTableName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOListDrdsOrderDOList extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone for which to query resources.
   * 
   * @example
   * cn-hangzhou-e
   */
  azoneId?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * 4C8G * 2
   */
  instSpec?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **Classic **: Classic Network
   * *   **vpc**: VPC
   * 
   * @example
   * vpc
   */
  network?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC.
   * 
   * @example
   * vsw-*******************
   */
  VSwtichId?: string;
  /**
   * @remarks
   * The ID of the VPC network.
   * 
   * @example
   * vpc-*******************
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      instSpec: 'InstSpec',
      network: 'Network',
      regionId: 'RegionId',
      VSwtichId: 'VSwtichId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      instSpec: 'string',
      network: 'string',
      regionId: 'string',
      VSwtichId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOList extends $dara.Model {
  drdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOListDrdsOrderDOList[];
  static names(): { [key: string]: string } {
    return {
      drdsOrderDOList: 'DrdsOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsOrderDOList: { 'type': 'array', 'itemType': DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOListDrdsOrderDOList },
    };
  }

  validate() {
    if(Array.isArray(this.drdsOrderDOList)) {
      $dara.Model.validateArray(this.drdsOrderDOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOListPolarOrderDOList extends $dara.Model {
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-g
   */
  azoneId?: string;
  /**
   * @remarks
   * The capacity of disk.
   * 
   * @example
   * 10240
   */
  dbInstanceStorage?: string;
  /**
   * @remarks
   * The storage engine of PolarDB.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * polar.mysql.x4.large
   */
  instanceClass?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **Classic**: Classic Network
   * *   **vpc**: VPC
   * 
   * @example
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The number of streams that were returned.
   * 
   * @example
   * 1
   */
  num?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * 5.6
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      dbInstanceStorage: 'DbInstanceStorage',
      engine: 'Engine',
      instanceClass: 'InstanceClass',
      network: 'Network',
      num: 'Num',
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      dbInstanceStorage: 'string',
      engine: 'string',
      instanceClass: 'string',
      network: 'string',
      num: 'number',
      regionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOList extends $dara.Model {
  polarOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOListPolarOrderDOList[];
  static names(): { [key: string]: string } {
    return {
      polarOrderDOList: 'PolarOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polarOrderDOList: { 'type': 'array', 'itemType': DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOListPolarOrderDOList },
    };
  }

  validate() {
    if(Array.isArray(this.polarOrderDOList)) {
      $dara.Model.validateArray(this.polarOrderDOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOListRdsOrderDOList extends $dara.Model {
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-g
   */
  azoneId?: string;
  /**
   * @remarks
   * The capacity of disk.
   * 
   * @example
   * 10240
   */
  dbInstanceStorage?: string;
  /**
   * @remarks
   * The storage engine of the instance.
   * 
   * @example
   * MYSQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * rds.mysql.s2.large
   */
  instanceClass?: string;
  /**
   * @remarks
   * The network type. Valid values: - **Classic **: Classic Network
   * - **vpc**: VPC
   * 
   * @example
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The number of streams that were returned.
   * 
   * @example
   * 1
   */
  num?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * 5.6
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      dbInstanceStorage: 'DbInstanceStorage',
      engine: 'Engine',
      instanceClass: 'InstanceClass',
      network: 'Network',
      num: 'Num',
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      dbInstanceStorage: 'string',
      engine: 'string',
      instanceClass: 'string',
      network: 'string',
      num: 'number',
      regionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOList extends $dara.Model {
  rdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOListRdsOrderDOList[];
  static names(): { [key: string]: string } {
    return {
      rdsOrderDOList: 'RdsOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsOrderDOList: { 'type': 'array', 'itemType': DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOListRdsOrderDOList },
    };
  }

  validate() {
    if(Array.isArray(this.rdsOrderDOList)) {
      $dara.Model.validateArray(this.rdsOrderDOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDO extends $dara.Model {
  /**
   * @remarks
   * The information of the restored order.
   */
  drdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOList;
  /**
   * @remarks
   * The ID of the restored apsaradb for PolarDB cluster.
   */
  polarOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOList;
  /**
   * @remarks
   * The information of the restored RDS order.
   */
  rdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOList;
  static names(): { [key: string]: string } {
    return {
      drdsOrderDOList: 'DrdsOrderDOList',
      polarOrderDOList: 'PolarOrderDOList',
      rdsOrderDOList: 'RdsOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOList,
      polarOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOList,
      rdsOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOList,
    };
  }

  validate() {
    if(this.drdsOrderDOList && typeof (this.drdsOrderDOList as any).validate === 'function') {
      (this.drdsOrderDOList as any).validate();
    }
    if(this.polarOrderDOList && typeof (this.polarOrderDOList as any).validate === 'function') {
      (this.polarOrderDOList as any).validate();
    }
    if(this.rdsOrderDOList && typeof (this.rdsOrderDOList as any).validate === 'function') {
      (this.rdsOrderDOList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataFull extends $dara.Model {
  /**
   * @remarks
   * Indicates the number of remaining days before the tasks expire.
   * 
   * @example
   * 0
   */
  expired?: number;
  /**
   * @remarks
   * Indicates the progress of the tasks.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * Indicates the start time when the tasks are performed.
   * 
   * @example
   * 2019-09-16 15:11:53
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates the number of tasks.
   * 
   * @example
   * 2
   */
  total?: number;
  /**
   * @remarks
   * Indicates the number of transactions processed by the database per second.
   * 
   * @example
   * 0
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataFullCheck extends $dara.Model {
  /**
   * @remarks
   * Indicates the number of remaining days before the tasks expire.
   * 
   * @example
   * 0
   */
  expired?: number;
  /**
   * @remarks
   * Indicates the progress of the tasks.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * Indicates the start time when the tasks are performed.
   * 
   * @example
   * 2019-09-16 15:12:53
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates the number of tasks.
   * 
   * @example
   * 0
   */
  total?: number;
  /**
   * @remarks
   * Indicates the number of transactions processed by the database per second.
   * 
   * @example
   * 0
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataFullRevise extends $dara.Model {
  /**
   * @remarks
   * Indicates the number of remaining days before the tasks expire.
   * 
   * @example
   * 0
   */
  expired?: number;
  /**
   * @remarks
   * Indicates the progress of the tasks.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * Indicates the start time when the tasks are performed.
   * 
   * @example
   * 2019-09-16 15:12:53
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates the number of tasks.
   * 
   * @example
   * 0
   */
  total?: number;
  /**
   * @remarks
   * Indicates the number of transactions processed by the database per second.
   * 
   * @example
   * 0
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataIncrement extends $dara.Model {
  /**
   * @remarks
   * Indicates the latency of the incremental data synchronization.
   * 
   * @example
   * 1568617906
   */
  delay?: number;
  /**
   * @remarks
   * Indicates the start time when the incremental data synchronization is performed.
   * 
   * @example
   * 2019-09-16 15:12:53
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates the number of transactions processed by the database per second.
   * 
   * @example
   * 10
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      startTime: 'StartTime',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      startTime: 'string',
      tps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyDataReview extends $dara.Model {
  /**
   * @remarks
   * Indicates the number of remaining days before the tasks expire.
   * 
   * @example
   * 0
   */
  expired?: number;
  /**
   * @remarks
   * Indicates the progress of the tasks.
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * Indicates the start time when the tasks are performed.
   * 
   * @example
   * 2019-09-16 15:12:53
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates the number of tasks.
   * 
   * @example
   * 5
   */
  total?: number;
  /**
   * @remarks
   * Indicates the number of transactions processed by the database per second.
   * 
   * @example
   * 10
   */
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      progress: 'Progress',
      startTime: 'StartTime',
      total: 'Total',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'number',
      progress: 'number',
      startTime: 'string',
      total: 'number',
      tps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the number of remaining days before the tasks to shard tables or convert tables expire.
   * 
   * @example
   * 0
   */
  expired?: string;
  /**
   * @remarks
   * Indicates information about full migration tasks.
   */
  full?: DescribeShardTaskInfoResponseBodyDataFull;
  /**
   * @remarks
   * Indicates information about full check tasks.
   */
  fullCheck?: DescribeShardTaskInfoResponseBodyDataFullCheck;
  /**
   * @remarks
   * Indicates information about full correction tasks.
   */
  fullRevise?: DescribeShardTaskInfoResponseBodyDataFullRevise;
  /**
   * @remarks
   * Indicates information about incremental data synchronization.
   */
  increment?: DescribeShardTaskInfoResponseBodyDataIncrement;
  /**
   * @remarks
   * Indicates the incremental data synchronization progress.
   * 
   * @example
   * 70
   */
  progress?: string;
  /**
   * @remarks
   * Indicates check tasks.
   */
  review?: DescribeShardTaskInfoResponseBodyDataReview;
  /**
   * @remarks
   * Indicates the name of the table that you convert or shard.
   * 
   * @example
   * a1
   */
  sourceTableName?: string;
  /**
   * @remarks
   * Indicates the current stage of the task.
   * 
   * @example
   * 2
   */
  stage?: string;
  /**
   * @remarks
   * Indicates the state of the tasks to shard tables or convert tables.
   */
  status?: string;
  /**
   * @remarks
   * Indicates the name of the table after you convert or shard the table.
   * 
   * @example
   * a2
   */
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      expired: 'Expired',
      full: 'Full',
      fullCheck: 'FullCheck',
      fullRevise: 'FullRevise',
      increment: 'Increment',
      progress: 'Progress',
      review: 'Review',
      sourceTableName: 'SourceTableName',
      stage: 'Stage',
      status: 'Status',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expired: 'string',
      full: DescribeShardTaskInfoResponseBodyDataFull,
      fullCheck: DescribeShardTaskInfoResponseBodyDataFullCheck,
      fullRevise: DescribeShardTaskInfoResponseBodyDataFullRevise,
      increment: DescribeShardTaskInfoResponseBodyDataIncrement,
      progress: 'string',
      review: DescribeShardTaskInfoResponseBodyDataReview,
      sourceTableName: 'string',
      stage: 'string',
      status: 'string',
      targetTableName: 'string',
    };
  }

  validate() {
    if(this.full && typeof (this.full as any).validate === 'function') {
      (this.full as any).validate();
    }
    if(this.fullCheck && typeof (this.fullCheck as any).validate === 'function') {
      (this.fullCheck as any).validate();
    }
    if(this.fullRevise && typeof (this.fullRevise as any).validate === 'function') {
      (this.fullRevise as any).validate();
    }
    if(this.increment && typeof (this.increment as any).validate === 'function') {
      (this.increment as any).validate();
    }
    if(this.review && typeof (this.review as any).validate === 'function') {
      (this.review as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasksSqlFlashbackTask extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of the database on which a flashback task is performed.
   * 
   * @example
   * drds_flashback
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates the download URL.
   * 
   * @example
   * http://...
   */
  downloadUrl?: string;
  /**
   * @remarks
   * Indicates the time when the download URL expires.
   * 
   * @example
   * 1569216270000
   */
  expireTime?: number;
  /**
   * @remarks
   * Indicates the point in time when the instance was created.
   * 
   * @example
   * 1568611408000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Indicates the point in time when the flashback task is performed.
   * 
   * @example
   * 1568611469000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Indicates the ID of the primary key that corresponds to a table used in the flashback task.
   * 
   * @example
   * 238
   */
  id?: number;
  /**
   * @remarks
   * Indicates the ID of the instance.
   * 
   * @example
   * drdshbga76p6****
   */
  instId?: string;
  /**
   * @remarks
   * Indicates the progress of the reverse call.
   * 
   * @example
   * 10
   */
  recallProgress?: number;
  /**
   * @remarks
   * Indicates the type of the flashback task. Valid values:
   * 
   * *   **1**: image restoration
   * *   **2**: reverse restoration
   * 
   * @example
   * 1
   */
  recallRestoreType?: number;
  /**
   * @remarks
   * Indicates the status of the data recall task.
   * 
   * @example
   * 1
   */
  recallStatus?: number;
  /**
   * @remarks
   * Indicates the type of the reverse call. Valid values:
   * 
   * *   **0**: exact search
   * *   **1**: fuzzy search
   * 
   * @example
   * 1
   */
  recallType?: number;
  /**
   * @remarks
   * Indicates the start time of the reverse call.
   * 
   * @example
   * 1568509597000
   */
  searchEndTime?: number;
  /**
   * @remarks
   * Indicates the end time of the reverse call.
   * 
   * @example
   * 1568609597000
   */
  searchStartTime?: number;
  /**
   * @remarks
   * Indicates the number of data rows that are flashed back.
   * 
   * @example
   * 0
   */
  sqlCounter?: number;
  /**
   * @remarks
   * Indicates the primary key specified in the SQL statements.
   * 
   * @example
   * id
   */
  sqlPk?: string;
  /**
   * @remarks
   * Indicates the types of the SQL statements.
   * 
   * @example
   * Insert,Update,Delete
   */
  sqlType?: string;
  /**
   * @remarks
   * Indicates the name of the table that contains the data that are flashed back.
   * 
   * @example
   * drds_params
   */
  tableName?: string;
  /**
   * @remarks
   * Indicates the ID of the trace of the SQL query.
   * 
   * @example
   * trace
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      downloadUrl: 'DownloadUrl',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instId: 'InstId',
      recallProgress: 'RecallProgress',
      recallRestoreType: 'RecallRestoreType',
      recallStatus: 'RecallStatus',
      recallType: 'RecallType',
      searchEndTime: 'SearchEndTime',
      searchStartTime: 'SearchStartTime',
      sqlCounter: 'SqlCounter',
      sqlPk: 'SqlPk',
      sqlType: 'SqlType',
      tableName: 'TableName',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      downloadUrl: 'string',
      expireTime: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      instId: 'string',
      recallProgress: 'number',
      recallRestoreType: 'number',
      recallStatus: 'number',
      recallType: 'number',
      searchEndTime: 'number',
      searchStartTime: 'number',
      sqlCounter: 'number',
      sqlPk: 'string',
      sqlType: 'string',
      tableName: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasks extends $dara.Model {
  sqlFlashbackTask?: DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasksSqlFlashbackTask[];
  static names(): { [key: string]: string } {
    return {
      sqlFlashbackTask: 'SqlFlashbackTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlFlashbackTask: { 'type': 'array', 'itemType': DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasksSqlFlashbackTask },
    };
  }

  validate() {
    if(Array.isArray(this.sqlFlashbackTask)) {
      $dara.Model.validateArray(this.sqlFlashbackTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of a column.
   * 
   * @example
   * Id
   */
  columnName?: string;
  /**
   * @remarks
   * Indicates the type of the column.
   * 
   * @example
   * bigint(20)
   */
  columnType?: string;
  /**
   * @remarks
   * Extra
   * 
   * @example
   * auto_increment
   */
  extra?: string;
  /**
   * @remarks
   * Indicates the primary key of the table.
   * 
   * @example
   * PRI
   */
  index?: string;
  /**
   * @remarks
   * Indicates whether the column can be empty.
   * 
   * @example
   * NO
   */
  isAllowNull?: string;
  /**
   * @remarks
   * Indicates whether the column is the primary key column of the table.
   * 
   * @example
   * YES
   */
  isPk?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      extra: 'Extra',
      index: 'Index',
      isAllowNull: 'IsAllowNull',
      isPk: 'IsPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnType: 'string',
      extra: 'string',
      index: 'string',
      isAllowNull: 'string',
      isPk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the details about the table schema.
   */
  list?: DescribeTableResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeTableResponseBodyDataList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableListByTypeResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * Indicates the property of a table.
   * 
   * @example
   * single
   */
  property?: string;
  /**
   * @remarks
   * Indicates the name of the table.
   * 
   * @example
   * employee_split
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether full table scanning is allowed.
   * 
   * @example
   * false
   */
  allowFullTableScan?: boolean;
  /**
   * @remarks
   * Indicates whether the table is a replicated table.
   * 
   * @example
   * false
   */
  broadcast?: boolean;
  /**
   * @remarks
   * The type of the PolarDB-X 1.0 instance. Valid values:
   * 
   * *   0: The instance is a dedicated instance.
   * *   1: The instance is a shard instance.
   * 
   * @example
   * 0
   */
  dbInstType?: number;
  /**
   * @remarks
   * Indicates whether the table is locked.
   * 
   * @example
   * false
   */
  isLocked?: boolean;
  /**
   * @remarks
   * Indicates whether the table is sharded.
   * 
   * @example
   * false
   */
  isShard?: boolean;
  /**
   * @remarks
   * The shard key of the table.
   * 
   * @example
   * null
   */
  shardKey?: string;
  /**
   * @remarks
   * Indicates whether sharding tasks are performed on the table. Valid values:
   * 
   * *   0: No sharding task is performed on the table.
   * *   1: Sharding tasks are performed on the table.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullTableScan: 'AllowFullTableScan',
      broadcast: 'Broadcast',
      dbInstType: 'DbInstType',
      isLocked: 'IsLocked',
      isShard: 'IsShard',
      shardKey: 'ShardKey',
      status: 'Status',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullTableScan: 'boolean',
      broadcast: 'boolean',
      dbInstType: 'number',
      isLocked: 'boolean',
      isShard: 'boolean',
      shardKey: 'string',
      status: 'number',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDrdsDbRdsRelationInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the storage instance.
   * 
   * @example
   * rm-bp16ad920ndxxxx02
   */
  rdsInstanceId?: string;
  /**
   * @remarks
   * The IDs of the read-only storage instances.
   */
  readOnlyInstanceInfo?: string[];
  /**
   * @remarks
   * The ID of the storage instance that is in use. If the specified instance in the request is a primary DRDS instance, the value of this parameter is the ID of the primary storage instance. If the specified instance in the request is a read-only DRDS instance, the value of this parameter is the ID of the secondary storage instance.
   * 
   * @example
   * rm-bp1l8xi1dd9xxxxbj
   */
  usedInstanceId?: string;
  /**
   * @remarks
   * The type of the storage instance that is in use.
   * 
   * @example
   * RDS
   */
  usedInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      rdsInstanceId: 'RdsInstanceId',
      readOnlyInstanceInfo: 'ReadOnlyInstanceInfo',
      usedInstanceId: 'UsedInstanceId',
      usedInstanceType: 'UsedInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstanceId: 'string',
      readOnlyInstanceInfo: { 'type': 'array', 'itemType': 'string' },
      usedInstanceId: 'string',
      usedInstanceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyInstanceInfo)) {
      $dara.Model.validateArray(this.readOnlyInstanceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that you want to query.
   * 
   * @example
   * color
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that you want to query.
   * 
   * @example
   * red
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * drdshzsd11****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. The value of this parameter is fixed to INSTANCE.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegeRequestDbPrivilege extends $dara.Model {
  /**
   * @remarks
   * The name of the database that you want to manage by using the account to modify.
   * 
   * @example
   * test123
   */
  dbName?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the account.
   * 
   * @example
   * ReadWrite
   */
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      privilege: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDrdsParamsRequestData extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter that you want to configure for a database.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * [true|false]
   */
  paramRanges?: string;
  /**
   * @remarks
   * The type of the parameter that you want to configure. Valid values:
   * 
   * *   **ATOM**: the configuration item in the layer-3 data source.
   * *   **CONFIG**: the configuration item in ConfigServer.
   * *   **DIAMOND**: the configuration item in Diamond.
   * 
   * @example
   * ATOM
   */
  paramType?: string;
  /**
   * @remarks
   * The value of parameter that you want to configure.
   * 
   * @example
   * true
   */
  paramValue?: string;
  /**
   * @remarks
   * The name of the parameter that you want to configure.
   * 
   * @example
   * FORBID_EXECUTE_DML_ALL
   */
  paramVariableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      paramRanges: 'ParamRanges',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
      paramVariableName: 'ParamVariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      paramRanges: 'string',
      paramType: 'string',
      paramValue: 'string',
      paramVariableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequestExtendedMapping extends $dara.Model {
  /**
   * @remarks
   * The name of the source physical database.
   * 
   * @example
   * test
   */
  srcDb?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS instance to which the source physical database belongs.
   * 
   * @example
   * rm-bp1t1mk5a5bdj****
   */
  srcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      srcDb: 'SrcDb',
      srcInstanceId: 'SrcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srcDb: 'string',
      srcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequestInstanceDbMapping extends $dara.Model {
  /**
   * @remarks
   * The name of the hot-spot database.
   * 
   * This parameter is required.
   * 
   * @example
   * hot_test_****_****
   */
  dbList?: string;
  /**
   * @remarks
   * The name of the ApsaraDB RDS instance to which the hot-spot database belongs.
   * 
   * @example
   * rm-bp1t1mk5a5bdj****
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      dbList: 'DbList',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbList: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequestMapping extends $dara.Model {
  /**
   * @remarks
   * The shard key used to split the database to which the associated table belongs.
   * 
   * @example
   * platform
   */
  dbShardColumn?: string;
  /**
   * @remarks
   * The name of the hot-spot database.
   * 
   * @example
   * hot_test_****_****
   */
  hotDbName?: string;
  /**
   * @remarks
   * The name of the hot-spot table. The name must be prefixed with the name of a logical table.
   * 
   * @example
   * test_table_*****
   */
  hotTableName?: string;
  /**
   * @remarks
   * The name of the logical table on which you want to perform hot-spot scale-out.
   * 
   * @example
   * test_table
   */
  logicTable?: string;
  /**
   * @remarks
   * The value of the shard key used to split a database.
   * 
   * @example
   * test
   */
  shardDbValue?: string;
  /**
   * @remarks
   * The value of the shard key used to split a table.
   * 
   * @example
   * test
   */
  shardTbValue?: string;
  /**
   * @remarks
   * The shard key used to split an associated table.
   * 
   * @example
   * platform
   */
  tbShardColumn?: string;
  static names(): { [key: string]: string } {
    return {
      dbShardColumn: 'DbShardColumn',
      hotDbName: 'HotDbName',
      hotTableName: 'HotTableName',
      logicTable: 'LogicTable',
      shardDbValue: 'ShardDbValue',
      shardTbValue: 'ShardTbValue',
      tbShardColumn: 'TbShardColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbShardColumn: 'string',
      hotDbName: 'string',
      hotTableName: 'string',
      logicTable: 'string',
      shardDbValue: 'string',
      shardTbValue: 'string',
      tbShardColumn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskRequestSupperAccountMapping extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB RDS instance that has the privileged account.
   * 
   * @example
   * rm-bp1t1mk5a5bdj****
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the privileged account of the ApsaraDB RDS instance.
   * 
   * @example
   * test
   */
  supperAccount?: string;
  /**
   * @remarks
   * The password of the privileged account of the ApsaraDB RDS instance.
   * 
   * @example
   * 11111111
   */
  supperPassword?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      supperAccount: 'SupperAccount',
      supperPassword: 'SupperPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      supperAccount: 'string',
      supperPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that you want to add.
   * 
   * @example
   * color
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that you want to add.
   * 
   * @example
   * red
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

export class ValidateShardTaskResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of a check item.
   * 
   * @example
   * same_schema
   */
  item?: string;
  /**
   * @remarks
   * Indicates the result of the check item. Valid values:
   * 
   * *   **0**: indicates the task is valid.
   * *   **1**: indicates the task is invalid.
   * 
   * @example
   * 0
   */
  result?: number;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      result: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the member account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The new password.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      drdsInstanceId: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeAccountPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ChangeAccountPasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeAccountPasswordResponseBody;
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
      body: ChangeAccountPasswordResponseBody,
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

export class ChangeInstanceAzoneRequest extends $dara.Model {
  changeVSwitch?: boolean;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsjiii1b49****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  drdsRegionId?: string;
  newVSwitch?: string;
  /**
   * @remarks
   * The source zone of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-B
   */
  originAzoneId?: string;
  /**
   * @remarks
   * The destination zone to which you want to modify
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-A
   */
  targetAzoneId?: string;
  static names(): { [key: string]: string } {
    return {
      changeVSwitch: 'ChangeVSwitch',
      drdsInstanceId: 'DrdsInstanceId',
      drdsRegionId: 'DrdsRegionId',
      newVSwitch: 'NewVSwitch',
      originAzoneId: 'OriginAzoneId',
      targetAzoneId: 'TargetAzoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeVSwitch: 'boolean',
      drdsInstanceId: 'string',
      drdsRegionId: 'string',
      newVSwitch: 'string',
      originAzoneId: 'string',
      targetAzoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeInstanceAzoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4305162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ChangeInstanceAzoneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeInstanceAzoneResponseBody;
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
      body: ChangeInstanceAzoneResponseBody,
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

export class CheckDrdsDbNameRequest extends $dara.Model {
  /**
   * @remarks
   * DRDS database name
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * DRDS instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * drds********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDrdsDbNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CF38538C-68BD-4278-B58F-EDE96F******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the DRDS database name is valid. Valid values: true: The database name is valid. false: the database name is invalid.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

export class CheckDrdsDbNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDrdsDbNameResponseBody;
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
      body: CheckDrdsDbNameResponseBody,
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

export class CheckExpandStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the PolarDB-X database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExpandStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the verification.
   */
  data?: CheckExpandStatusResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7CDBA7D5-8D62-4D24-9C65-510D62******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CheckExpandStatusResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckExpandStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckExpandStatusResponseBody;
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
      body: CheckExpandStatusResponseBody,
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

export class CheckSqlAuditEnableStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSqlAuditEnableStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FF13E47D-4E38-4A5A-BA68-32A554******
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the SQL audit feature. Valid values:
   * 
   * *   enabled: The SQL audit feature is enabled.
   * *   disabled: The SQL audit feature is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
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

export class CheckSqlAuditEnableStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckSqlAuditEnableStatusResponseBody;
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
      body: CheckSqlAuditEnableStatusResponseBody,
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

export class CreateDrdsDBRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account that has permissions to access all databases on the ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required only when the Type parameter is set to VERTICAL.
   * 
   * @example
   * drds_sample_account
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the storage instances that are used by the PolarDB-X 1.0 database. Set the value to RDS.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * Specifies whether the required ApsaraDB RDS for MySQL instance is being created.
   * 
   * @example
   * false
   */
  dbInstanceIsCreating?: boolean;
  /**
   * @remarks
   * The name of the PolarDB-X 1.0 database you want to create.
   * 
   * @example
   * testdb
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance on which you want to create the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbgal154****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The encoding method that is used by the database.
   * 
   * @example
   * utf8
   */
  encode?: string;
  instDbName?: CreateDrdsDBRequestInstDbName[];
  /**
   * @remarks
   * The password that is used to log on to the database.
   * 
   * @example
   * drds_sample_password
   */
  password?: string;
  /**
   * @example
   * ["drds_sample_rds_id1", "drds_sample_rds_id2"]
   */
  rdsInstance?: string[];
  rdsSuperAccount?: CreateDrdsDBRequestRdsSuperAccount[];
  /**
   * @remarks
   * The partitioning mode of the database. Valid values:
   * 
   * *   **HORIZONTAL**: The database is horizontally partitioned (sharded).
   * *   **VERTICAL**: The database is vertically partitioned.
   * 
   * @example
   * HORIZONTAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstType: 'DbInstType',
      dbInstanceIsCreating: 'DbInstanceIsCreating',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      encode: 'Encode',
      instDbName: 'InstDbName',
      password: 'Password',
      rdsInstance: 'RdsInstance',
      rdsSuperAccount: 'RdsSuperAccount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstType: 'string',
      dbInstanceIsCreating: 'boolean',
      dbName: 'string',
      drdsInstanceId: 'string',
      encode: 'string',
      instDbName: { 'type': 'array', 'itemType': CreateDrdsDBRequestInstDbName },
      password: 'string',
      rdsInstance: { 'type': 'array', 'itemType': 'string' },
      rdsSuperAccount: { 'type': 'array', 'itemType': CreateDrdsDBRequestRdsSuperAccount },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instDbName)) {
      $dara.Model.validateArray(this.instDbName);
    }
    if(Array.isArray(this.rdsInstance)) {
      $dara.Model.validateArray(this.rdsInstance);
    }
    if(Array.isArray(this.rdsSuperAccount)) {
      $dara.Model.validateArray(this.rdsSuperAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FF13E47D-4E38-4A5A-BA68-32A554AD45T6
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateDrdsDBResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDrdsDBResponseBody;
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
      body: CreateDrdsDBResponseBody,
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

export class CreateDrdsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * c1dd299c-10c6-11ea-bbbb-************
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies the description of the instance. The description must meet the following requirements:
   * 
   * *   The description cannot contain the prefix http:// or https://.
   * *   The description must start with a letter or a Chinese character, and can contain uppercase and lowercase letters, Chinese characters, digits, underscores (_), and hyphens (-).
   * *   The description must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies the purchase duration of the subscription instance.
   * 
   * *   If the PricingCycle parameter is set to year, the value range of the Duration parameter is 1 to 3.
   * *   If the PricingCycle parameter is set to month, the value range of the Duration parameter is 1 to 9.
   * 
   * >  This parameter only takes effect when the PayType parameter is set to drdsPre.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Specifies the instance type of the instance. Valid values:
   * 
   * *   **drds.sn2.4c16g**: The instance is of the Starter Edition.
   * *   **drds.sn2.8c32g**: The instance is of the Standard Edition
   * *   **drds.sn2.16c64g**: The instance is of the Enterprise Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * drds.sn2.4c16g
   */
  instanceSeries?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic renewal. Valid values:
   * 
   * *   **true**: If the PricingCycle parameter is set to month, the subscription is automatically renewed for one month. If the PricingCycle parameter is set to year, the subscription is automatically renewed for one year.
   * *   **false**: The auto-renewal feature is disabled for the instance.
   * 
   * >  This parameter only takes effect when the PayType parameter is set to drdsPre.
   * 
   * @example
   * true
   */
  isAutoRenew?: boolean;
  /**
   * @remarks
   * Specifies the ID of the primary instance. This parameter is only required when you create a read-only instance.
   * 
   * @example
   * drds***********
   */
  masterInstId?: string;
  /**
   * @remarks
   * Specifies the MySQL version that is supported by the instance. Valid values:
   * 
   * *   **5**: The instance is fully compatible with MySQL 5.x. This value is the default value.
   * *   **8**: The instance is fully compatible with MySQL 8.0.
   * 
   * >  This parameter only takes effect when you create a primary instance. By default, the MySQL version of the read-only instance is the same as that of the primary instance.
   * 
   * @example
   * 5
   */
  mySQLVersion?: number;
  /**
   * @remarks
   * Specifies the billing method of the instance. Valid values:
   * 
   * *   **drdsPre**: The instance uses the subscription billing method.
   * *   **drdsPost**: The instance uses the pay-as-you-go billing method.
   * *   **drdsRo**: By default, the pay-as-you-go billing method is used when you create read-only instances.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsPost
   */
  payType?: string;
  /**
   * @remarks
   * Specifies the unit of the subscription duration of the subscription instance. Valid values:
   * 
   * *   **year**: The unit of the subscription duration is year.
   * *   **month**: The unit of the subscription duration is month.
   * 
   * >  This parameter is required if you set the PayType parameter to drdsPre.
   * 
   * @example
   * month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Specifies the number of instances to be created. You can set the value only to 1. The value specifies that you can create one instance each time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * Specifies the region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies the ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies the specification code of the instance. The value consists of the instance type and the specified instance specification. For example, you can set the value to drds.sn2.4c16g.8c32g.
   * 
   * This parameter is required.
   * 
   * @example
   * drds.sn2.4c16g.8C32g
   */
  specification?: string;
  /**
   * @remarks
   * Specifies the type of the instance. Set the value to PRIVATE. The value PRIVATE specifies that the instance is a dedicated instance.
   * 
   * >  You can also set the value to 1 to specify that the instance is a dedicated instance.
   * 
   * This parameter is required.
   * 
   * @example
   * PRIVATE
   */
  type?: string;
  /**
   * @remarks
   * Specifies the ID of the VPC.
   * 
   * @example
   * vpc-**********
   */
  vpcId?: string;
  /**
   * @remarks
   * Specifies the ID of the vSwitch.
   * 
   * @example
   * vsw-**********
   */
  vswitchId?: string;
  /**
   * @remarks
   * Specifies the zone ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  /**
   * @remarks
   * Specifies whether the instance is a high-availability instance.
   * 
   * @example
   * true
   */
  isHa?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      duration: 'Duration',
      instanceSeries: 'InstanceSeries',
      isAutoRenew: 'IsAutoRenew',
      masterInstId: 'MasterInstId',
      mySQLVersion: 'MySQLVersion',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      specification: 'Specification',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
      isHa: 'isHa',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      duration: 'number',
      instanceSeries: 'string',
      isAutoRenew: 'boolean',
      masterInstId: 'string',
      mySQLVersion: 'number',
      payType: 'string',
      pricingCycle: 'string',
      quantity: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      specification: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
      isHa: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the details of the result.
   */
  data?: CreateDrdsInstanceResponseBodyData;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * D99D4644-A70D-49A3-B8B4-767ACC50SE2R
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDrdsInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDrdsInstanceResponseBody;
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
      body: CreateDrdsInstanceResponseBody,
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

export class CreateInstanceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_sample_account
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dbPrivilege?: CreateInstanceAccountRequestDbPrivilege[];
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance for which you want to create the account.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsjiii1b49****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The password of the account you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_sample_password
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbPrivilege: 'DbPrivilege',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbPrivilege: { 'type': 'array', 'itemType': CreateInstanceAccountRequestDbPrivilege },
      drdsInstanceId: 'string',
      password: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbPrivilege)) {
      $dara.Model.validateArray(this.dbPrivilege);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FF13E47D-4E38-4A5A-BA68-4E610EVF56DC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateInstanceAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceAccountResponseBody;
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
      body: CreateInstanceAccountResponseBody,
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

export class CreateInstanceInternetAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds****************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region to which the DRDS instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
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

export class CreateInstanceInternetAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the activity fails.
   * 
   * >  This parameter appears only when an error occurs during the API call.
   * 
   * @example
   * 404
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the public IP address was created.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1DF6052F-15E2-4E69-9628-D6BCC3******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
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

export class CreateInstanceInternetAddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceInternetAddressResponseBody;
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
      body: CreateInstanceInternetAddressResponseBody,
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

export class CreateOrderForRdsRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON string that contains the order details. For more information, see [CreateDBInstance](https://help.aliyun.com/document_detail/26228.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"key":"value"}
   */
  params?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
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

export class CreateOrderForRdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the purchased RDS instance.
   * 
   * @example
   * [rm-***********]
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9819BC51-D33D-4EB1-B80F-A89A20******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class CreateOrderForRdsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOrderForRdsResponseBody;
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
      body: CreateOrderForRdsResponseBody,
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

export class CreateShardTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the DRDS database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the resource group resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the source table.
   * 
   * This parameter is required.
   * 
   * @example
   * test_tb1
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The name of the destination table.
   * 
   * This parameter is required.
   * 
   * @example
   * test_tb2
   */
  targetTableName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:`  SHARD_TO_SINGLE `,`  SINGLE_TO_SHARD `,`  SHARD_TO_SHARD `.
   * 
   * This parameter is required.
   * 
   * @example
   * SINGLE_TO_SHARD
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateShardTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Task creation result
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F8997D95-94AD-416A-AE70-E24D08******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the operation.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class CreateShardTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateShardTaskResponseBody;
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
      body: CreateShardTaskResponseBody,
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

export class DescribeBackMenuRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackMenuResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup information list.
   */
  list?: DescribeBackMenuResponseBodyList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 60C21BE4-EDFE-454C-95ED-3A5C74******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: DescribeBackMenuResponseBodyList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackMenuResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackMenuResponseBody;
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
      body: DescribeBackMenuResponseBody,
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

export class DescribeBackupDbsRequest extends $dara.Model {
  /**
   * @remarks
   * Query by backup set ID
   * 
   * @example
   * 201908367
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * Query by restoration time.
   * 
   * @example
   * 1568632541236
   */
  preferredRestoreTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      drdsInstanceId: 'DrdsInstanceId',
      preferredRestoreTime: 'PreferredRestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      drdsInstanceId: 'string',
      preferredRestoreTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDbsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about a database.
   */
  dbNames?: DescribeBackupDbsResponseBodyDbNames;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 842DFA7F-B09B-42A2-B115-E684AE******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbNames: 'DbNames',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbNames: DescribeBackupDbsResponseBodyDbNames,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dbNames && typeof (this.dbNames as any).validate === 'function') {
      (this.dbNames as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupDbsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupDbsResponseBody;
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
      body: DescribeBackupDbsResponseBody,
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

export class DescribeBackupLocalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLocalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the backup policy.
   */
  backupPolicyDO?: DescribeBackupLocalResponseBodyBackupPolicyDO;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FDC9CFD5-306D-4A23-9D8C-057274C6****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPolicyDO: 'BackupPolicyDO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPolicyDO: DescribeBackupLocalResponseBodyBackupPolicyDO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.backupPolicyDO && typeof (this.backupPolicyDO as any).validate === 'function') {
      (this.backupPolicyDO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupLocalResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupLocalResponseBody;
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
      body: DescribeBackupLocalResponseBody,
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

export class DescribeBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga71nn****
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the backup policy.
   */
  backupPolicyDO?: DescribeBackupPolicyResponseBodyBackupPolicyDO;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8FAF3989-79CD-4A67-8FFD-97899B64****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupPolicyDO: 'BackupPolicyDO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPolicyDO: DescribeBackupPolicyResponseBodyBackupPolicyDO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.backupPolicyDO && typeof (this.backupPolicyDO as any).validate === 'function') {
      (this.backupPolicyDO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupPolicyResponseBody;
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
      body: DescribeBackupPolicyResponseBody,
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

export class DescribeBackupSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The end of the query time which is in timestamp format (measured in millisecond) .
   * 
   * >  The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1591326000000
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the query time which is in timestamp format (measured in millisecond).
   * 
   * This parameter is required.
   * 
   * @example
   * 1591327800000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of backup sets.
   */
  backupSets?: DescribeBackupSetsResponseBodyBackupSets;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7103AEE3-9025-442F-B82B-BABD0A******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      backupSets: 'BackupSets',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSets: DescribeBackupSetsResponseBodyBackupSets,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.backupSets && typeof (this.backupSets as any).validate === 'function') {
      (this.backupSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupSetsResponseBody;
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
      body: DescribeBackupSetsResponseBody,
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

export class DescribeBackupTimesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga71nn****
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTimesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 4780A19F-5ECB-4C56-AD20-966A3FF9DE5R
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates the information about the time range within which the data of the instance can be restored to a point in time.
   */
  restoreTime?: DescribeBackupTimesResponseBodyRestoreTime;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreTime: 'RestoreTime',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreTime: DescribeBackupTimesResponseBodyRestoreTime,
      success: 'boolean',
    };
  }

  validate() {
    if(this.restoreTime && typeof (this.restoreTime as any).validate === 'function') {
      (this.restoreTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTimesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupTimesResponseBody;
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
      body: DescribeBackupTimesResponseBody,
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

export class DescribeBroadcastTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The content of the query.
   * 
   * @example
   * tb1
   */
  query?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dbName: 'string',
      drdsInstanceId: 'string',
      pageSize: 'number',
      query: 'string',
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

export class DescribeBroadcastTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the database is sharded.
   * 
   * @example
   * true
   */
  isShard?: boolean;
  /**
   * @remarks
   * Indicates information about broadcast tables.
   */
  list?: DescribeBroadcastTablesResponseBodyList[];
  /**
   * @remarks
   * Indicates the page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Indicates the number of entries returned per page.
   * 
   * @example
   * 40
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 86E420ED-43F2-4788-A58C-921849******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates the total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      isShard: 'IsShard',
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShard: 'boolean',
      list: { 'type': 'array', 'itemType': DescribeBroadcastTablesResponseBodyList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBroadcastTablesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBroadcastTablesResponseBody;
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
      body: DescribeBroadcastTablesResponseBody,
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

export class DescribeDbInstanceDbsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the privileged account of the PolarDB-X 1.0 instance. You do not need to specify this parameter if you have no privileged account.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The engine type of the storage-layer databases. Valid values: **POLARDB** and **RDS**.
   * 
   * @example
   * POLARDB
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of the instance in which the storage-layer databases are deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The password of the privileged account. You do not need to specify this parameter if you have no privileged account.
   * 
   * @example
   * pwd_111111
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstType: 'DbInstType',
      dbInstanceId: 'DbInstanceId',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstType: 'string',
      dbInstanceId: 'string',
      drdsInstanceId: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the information about the storage-layer databases.
   */
  databases?: DescribeDbInstanceDbsResponseBodyDatabases;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E9F3D991-08DE-4B74-BE0E-06B809******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates the total number of storage-layer databases.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: DescribeDbInstanceDbsResponseBodyDatabases,
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.databases && typeof (this.databases as any).validate === 'function') {
      (this.databases as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstanceDbsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDbInstanceDbsResponseBody;
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
      body: DescribeDbInstanceDbsResponseBody,
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

export class DescribeDbInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Storage layer type. Valid values: **POLARDB** or **RDS**.
   * 
   * @example
   * POLARDB
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the storage or cluster.
   * 
   * @example
   * pc-***************
   */
  search?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      drdsInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      search: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the instance.
   */
  items?: DescribeDbInstancesResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 293275B3-8FC0-4619-A26E-6F062FASD56R
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDbInstancesResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDbInstancesResponseBody;
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
      body: DescribeDbInstancesResponseBody,
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

export class DescribeDrdsDBRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the details about the database.
   */
  data?: DescribeDrdsDBResponseBodyData;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 58FB0EC7-CF71-4E48-92FB-CF070D******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsDBResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsDBResponseBody;
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
      body: DescribeDrdsDBResponseBody,
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

export class DescribeDrdsDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*****************
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The name of the DRDS database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of each PolarDB cluster.
   */
  dbInstance?: DescribeDrdsDBClusterResponseBodyDbInstance;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 60A77FD6-0DE4-4A34-B6FB-9C2673******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: DescribeDrdsDBClusterResponseBodyDbInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dbInstance && typeof (this.dbInstance as any).validate === 'function') {
      (this.dbInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsDBClusterResponseBody;
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
      body: DescribeDrdsDBClusterResponseBody,
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

export class DescribeDrdsDBIpWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * drds********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The name of the whitelist group.
   * 
   * @example
   * group1
   */
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      groupName: 'string',
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

export class DescribeDrdsDBIpWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist.
   */
  ipWhiteList?: DescribeDrdsDBIpWhiteListResponseBodyIpWhiteList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 017453B9-0001-4745-87BF-DD612D850ED0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      ipWhiteList: 'IpWhiteList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhiteList: DescribeDrdsDBIpWhiteListResponseBodyIpWhiteList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.ipWhiteList && typeof (this.ipWhiteList as any).validate === 'function') {
      (this.ipWhiteList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsDBIpWhiteListResponseBody;
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
      body: DescribeDrdsDBIpWhiteListResponseBody,
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

export class DescribeDrdsDBsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga1138****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The number of the page to return. The value of this parameter must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of databases to return on each page. Valid values: **30**, **50**, and **100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which the PolarDB-X 1.0 instance is created.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

export class DescribeDrdsDBsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned databases.
   */
  data?: DescribeDrdsDBsResponseBodyData;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of databases returned on each page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 006B7D19-8CDB-4AA6-AAE7-23C107GS3W2T
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of returned databases.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsDBsResponseBodyData,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsDBsResponseBody;
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
      body: DescribeDrdsDBsResponseBody,
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

export class DescribeDrdsDbInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom ApsaraDB RDS for MySQL instance that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1t1mk5a5bdj****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The name of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga1138****
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the returned custom ApsaraDB RDS for MySQL instance.
   */
  dbInstance?: DescribeDrdsDbInstanceResponseBodyDbInstance;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FE09970-CA69-4144-88CA-67FB4BTY56G3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: DescribeDrdsDbInstanceResponseBodyDbInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dbInstance && typeof (this.dbInstance as any).validate === 'function') {
      (this.dbInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsDbInstanceResponseBody;
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
      body: DescribeDrdsDbInstanceResponseBody,
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

export class DescribeDrdsDbInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * dbname
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga1138****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
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

export class DescribeDrdsDbInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates information about the ApsaraDB RDS for MySQL instances that are used to store the data of the specified database.
   */
  dbInstances?: DescribeDrdsDbInstancesResponseBodyDbInstances;
  /**
   * @remarks
   * Indicates the page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * Indicates the number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4305162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates the number of primary ApsaraDB RDS for MySQL instances.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: DescribeDrdsDbInstancesResponseBodyDbInstances,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.dbInstances && typeof (this.dbInstances as any).validate === 'function') {
      (this.dbInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsDbInstancesResponseBody;
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
      body: DescribeDrdsDbInstancesResponseBody,
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

export class DescribeDrdsDbRdsNameListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsxxxxxxxxxxx
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbRdsNameListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the instances that are used to store the data of a database.
   */
  instanceNameList?: DescribeDrdsDbRdsNameListResponseBodyInstanceNameList;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 7E6FA2BF-05F2-44DD-95C0-D1B5B8xxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceNameList: 'InstanceNameList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNameList: DescribeDrdsDbRdsNameListResponseBodyInstanceNameList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instanceNameList && typeof (this.instanceNameList as any).validate === 'function') {
      (this.instanceNameList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDbRdsNameListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsDbRdsNameListResponseBody;
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
      body: DescribeDrdsDbRdsNameListResponseBody,
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

export class DescribeDrdsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga1138****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
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

export class DescribeDrdsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the instance.
   */
  data?: DescribeDrdsInstanceResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B4F76641-BA45-4320-BE7C-9C62CFDAC9B2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsInstanceResponseBody;
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
      body: DescribeDrdsInstanceResponseBody,
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

export class DescribeDrdsInstanceDbMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the Distributed Relational Database Service (DRDS) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The end time. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1603166400000
   */
  endTime?: number;
  /**
   * @remarks
   * The performance monitoring metrics. You can specify one or more metrics for a query at a time. Separate multiple metric parameters with commas (,).
   * 
   * >  For more information about the details of performance monitoring metrics, see [Database monitoring](https://help.aliyun.com/document_detail/186704.html).
   * 
   * This parameter is required.
   * 
   * @example
   * qps
   */
  key?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1603162800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      endTime: 'number',
      key: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of monitoring data.
   */
  data?: DescribeDrdsInstanceDbMonitorResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDrdsInstanceDbMonitorResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsInstanceDbMonitorResponseBody;
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
      body: DescribeDrdsInstanceDbMonitorResponseBody,
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

export class DescribeDrdsInstanceLevelTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance of which the unfinished tasks you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * drdssen12****
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceLevelTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4305162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of returned unfinished tasks.
   */
  tasks?: DescribeDrdsInstanceLevelTasksResponseBodyTasks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      tasks: DescribeDrdsInstanceLevelTasksResponseBodyTasks,
    };
  }

  validate() {
    if(this.tasks && typeof (this.tasks as any).validate === 'function') {
      (this.tasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceLevelTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsInstanceLevelTasksResponseBody;
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
      body: DescribeDrdsInstanceLevelTasksResponseBody,
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

export class DescribeDrdsInstanceMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the value in the UNIX timestamp format. The timestamp must be in UTC. Unit: ms.
   * 
   * >  If the time range that you specify is less than 1 hour, the monitoring data that is collected in a 1-hour period before the end time is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1603209690000
   */
  endTime?: number;
  /**
   * @remarks
   * The performance monitoring metrics. You can specify one or more metrics. Separate multiple metric names with commas (,).
   * 
   * >  For more information about performance monitoring metrics, see [Monitor instances](https://help.aliyun.com/document_detail/186703.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cpu
   */
  key?: string;
  /**
   * @remarks
   * The multiple of the default time interval that you want to use to collect monitoring data. By default, the system collects monitoring data of resources at an interval of 1 minute. If you set the value of this parameter to 2, the system collects monitoring data of the instance at an interval of 2 minutes.
   * 
   * @example
   * 1
   */
  periodMultiple?: number;
  /**
   * @remarks
   * The ID of the region where the instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the value in the UNIX timestamp format. The timestamp must be in UTC. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1603123290000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      periodMultiple: 'PeriodMultiple',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      endTime: 'number',
      key: 'string',
      periodMultiple: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result set of the query.
   */
  data?: DescribeDrdsInstanceMonitorResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDrdsInstanceMonitorResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsInstanceMonitorResponseBody;
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
      body: DescribeDrdsInstanceMonitorResponseBody,
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

export class DescribeDrdsInstanceVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance whose version you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga1138****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
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

export class DescribeDrdsInstanceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the instance version.
   */
  data?: DescribeDrdsInstanceVersionResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4305162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsInstanceVersionResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsInstanceVersionResponseBody;
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
      body: DescribeDrdsInstanceVersionResponseBody,
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

export class DescribeDrdsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the instances.
   * 
   * @example
   * drds_test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the instances that you want to query expire.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * Specifies whether hybrid queries are supported.
   * 
   * @example
   * FALSE
   */
  mix?: boolean;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of instances returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * V1
   */
  productVersion?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instances you want to query belong. The value of this parameter can be NULL.
   * 
   * @example
   * NULL
   */
  resourceGroupId?: string;
  tag?: DescribeDrdsInstancesRequestTag[];
  /**
   * @remarks
   * The type of the instances that you want to query. Valid values:
   * 
   * *   **0**: shared instances
   * *   **1**: dedicated instances
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expired: 'Expired',
      mix: 'Mix',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productVersion: 'ProductVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expired: 'boolean',
      mix: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      productVersion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDrdsInstancesRequestTag },
      type: 'string',
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

export class DescribeDrdsInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned instances.
   */
  instances?: DescribeDrdsInstancesResponseBodyInstances;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of instances returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8734773E-7B21-4A22-9106-CBD245F8****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeDrdsInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsInstancesResponseBody;
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
      body: DescribeDrdsInstancesResponseBody,
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

export class DescribeDrdsParamsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * DescribeDrdsParams
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The type of nodes whose parameters you want to query. Valid values:
   * 
   * *   **INSTANCE: the instance level.**
   * *   **DB**: the database level.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  paramLevel?: string;
  /**
   * @remarks
   * The ID of the region where the PolarDB-X 1.0 instance is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      paramLevel: 'ParamLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      paramLevel: 'string',
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

export class DescribeDrdsParamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates information about parameters.
   */
  list?: DescribeDrdsParamsResponseBodyList[];
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4305162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeDrdsParamsResponseBodyList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsParamsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsParamsResponseBody;
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
      body: DescribeDrdsParamsResponseBody,
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

export class DescribeDrdsRdsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X instance.
   * 
   * > You can call the [DescribeDrdsInstances](https://help.aliyun.com/document_detail/139284.html) operation to query the information about instances in the specified account, such as the IDs of the instances.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsRdsInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the custom ApsaraDB RDS for MySQL instances at the storage layer.
   */
  dbInstances?: DescribeDrdsRdsInstancesResponseBodyDbInstances;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 123DB16B-02F2-45F7-A571-843991******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: DescribeDrdsRdsInstancesResponseBodyDbInstances,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dbInstances && typeof (this.dbInstances as any).validate === 'function') {
      (this.dbInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsRdsInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsRdsInstancesResponseBody;
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
      body: DescribeDrdsRdsInstancesResponseBody,
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

export class DescribeDrdsShardingDbsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database whose shards you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The matching pattern of the database name.
   * 
   * @example
   * test
   */
  dbNamePattern?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance whose database shards you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbgaf3c63qbo
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of database shards returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dbNamePattern: 'DbNamePattern',
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dbNamePattern: 'string',
      drdsInstanceId: 'string',
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

export class DescribeDrdsShardingDbsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of database shards returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 509BDE17-505A-4B3B-854D-30D3F092502F
   */
  requestId?: string;
  /**
   * @remarks
   * The list of returned database shards.
   */
  shardingDbs?: DescribeDrdsShardingDbsResponseBodyShardingDbs;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of returned database shards.
   * 
   * @example
   * 1
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      shardingDbs: 'ShardingDbs',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      shardingDbs: DescribeDrdsShardingDbsResponseBodyShardingDbs,
      success: 'boolean',
      total: 'string',
    };
  }

  validate() {
    if(this.shardingDbs && typeof (this.shardingDbs as any).validate === 'function') {
      (this.shardingDbs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsShardingDbsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsShardingDbsResponseBody;
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
      body: DescribeDrdsShardingDbsResponseBody,
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

export class DescribeDrdsSlowSqlsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The start time of the SQL query. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1568267711000
   */
  endTime?: number;
  /**
   * @remarks
   * The SQL execution time. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  exeTime?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The end time of the SQL query. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1568269711000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      exeTime: 'ExeTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      endTime: 'number',
      exeTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the details of the slow SQL query.
   */
  items?: DescribeDrdsSlowSqlsResponseBodyItems;
  /**
   * @remarks
   * Indicates the page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Indicates the number of entries returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 509BDE17-505A-4B3B-854D-30D3F0******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates the total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDrdsSlowSqlsResponseBodyItems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsSlowSqlsResponseBody;
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
      body: DescribeDrdsSlowSqlsResponseBody,
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

export class DescribeDrdsSqlAuditStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSqlAuditStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data set.
   */
  data?: DescribeDrdsSqlAuditStatusResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC3ABA3E-0F8A-4596-9104-F5155C******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsSqlAuditStatusResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSqlAuditStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsSqlAuditStatusResponseBody;
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
      body: DescribeDrdsSqlAuditStatusResponseBody,
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

export class DescribeDrdsTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsxxxxxxxxxxxx
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The type of tasks.
   * 
   * @example
   * test
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * CD412DF7-F21D-44CE-88FF-ED24917174A8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates information about the tasks.
   */
  tasks?: DescribeDrdsTasksResponseBodyTasks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      tasks: DescribeDrdsTasksResponseBodyTasks,
    };
  }

  validate() {
    if(this.tasks && typeof (this.tasks as any).validate === 'function') {
      (this.tasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsTasksResponseBody;
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
      body: DescribeDrdsTasksResponseBody,
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

export class DescribeExpandLogicTableInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_flashback
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the result that is returned.
   */
  data?: DescribeExpandLogicTableInfoListResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B6B7BDC-575D-4A77-A4F8-24B7EF******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeExpandLogicTableInfoListResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpandLogicTableInfoListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExpandLogicTableInfoListResponseBody;
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
      body: DescribeExpandLogicTableInfoListResponseBody,
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

export class DescribeHotDbListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds**********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result that is returned.
   */
  data?: DescribeHotDbListResponseBodyData;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * msg
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B6B7BDC-575D-4A77-A4F8-24B7EF******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeHotDbListResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHotDbListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHotDbListResponseBody;
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
      body: DescribeHotDbListResponseBody,
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

export class DescribeInstDbLogInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the DRDS database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbLogInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time range for log query.
   */
  logTimeRange?: DescribeInstDbLogInfoResponseBodyLogTimeRange;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5438952-70EE-4FA5-87A9-080DB0ASD45F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      logTimeRange: 'LogTimeRange',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logTimeRange: DescribeInstDbLogInfoResponseBodyLogTimeRange,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.logTimeRange && typeof (this.logTimeRange as any).validate === 'function') {
      (this.logTimeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbLogInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstDbLogInfoResponseBody;
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
      body: DescribeInstDbLogInfoResponseBody,
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

export class DescribeInstDbSlsInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbSlsInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the SQL audit.
   */
  auditInfo?: DescribeInstDbSlsInfoResponseBodyAuditInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC3ABA3E-0F8A-4596-9104-F5155C******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: DescribeInstDbSlsInfoResponseBodyAuditInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.auditInfo && typeof (this.auditInfo as any).validate === 'function') {
      (this.auditInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbSlsInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstDbSlsInfoResponseBody;
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
      body: DescribeInstDbSlsInfoResponseBody,
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

export class DescribeInstanceAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the information about the instance accounts.
   */
  instanceAccounts?: DescribeInstanceAccountsResponseBodyInstanceAccounts;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E2E4056D-57EB-4353-8355-2E6284******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceAccounts: 'InstanceAccounts',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAccounts: DescribeInstanceAccountsResponseBodyInstanceAccounts,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instanceAccounts && typeof (this.instanceAccounts as any).validate === 'function') {
      (this.instanceAccounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAccountsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceAccountsResponseBody;
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
      body: DescribeInstanceAccountsResponseBody,
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

export class DescribeInstanceSwitchAzoneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsxxxxxxxxxxxx
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-23ERW
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the operation.
   */
  result?: DescribeInstanceSwitchAzoneResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeInstanceSwitchAzoneResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceSwitchAzoneResponseBody;
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
      body: DescribeInstanceSwitchAzoneResponseBody,
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

export class DescribeInstanceSwitchNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 03E12FE3-1638-483E-A9B6-1A9120SER56T
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates the information about the virtual private cloud (VPC) in which the instance is deployed.
   */
  vpcInfos?: DescribeInstanceSwitchNetworkResponseBodyVpcInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      vpcInfos: 'VpcInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      vpcInfos: DescribeInstanceSwitchNetworkResponseBodyVpcInfos,
    };
  }

  validate() {
    if(this.vpcInfos && typeof (this.vpcInfos as any).validate === 'function') {
      (this.vpcInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchNetworkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceSwitchNetworkResponseBody;
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
      body: DescribeInstanceSwitchNetworkResponseBody,
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

export class DescribePreCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga76p6****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the precheck task.
   * 
   * This parameter is required.
   * 
   * @example
   * 4561
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
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

export class DescribePreCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the result of the precheck task.
   */
  preCheckResult?: DescribePreCheckResultResponseBodyPreCheckResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EED1A59A-CFEA-5CF8-BB4A-090E75B3D05E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      preCheckResult: 'PreCheckResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckResult: DescribePreCheckResultResponseBodyPreCheckResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.preCheckResult && typeof (this.preCheckResult as any).validate === 'function') {
      (this.preCheckResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePreCheckResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePreCheckResultResponseBody;
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
      body: DescribePreCheckResultResponseBody,
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

export class DescribeRDSPerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * mysql
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of the Distributed Relational Database Service (DRDS) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * @example
   * 1603209690000
   */
  endTime?: number;
  /**
   * @remarks
   * The performance monitoring metrics. You can specify one or more metrics for a query at a time. Separate multiple metric parameters with commas (,).
   * 
   * >  For more information about the details of performance monitoring metrics, see [Storage monitoring](https://help.aliyun.com/document_detail/186705.html).
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL_MemCpuUsage
   */
  keys?: string;
  /**
   * @remarks
   * The ID of the storage-layer ApsaraDB RDS for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-************
   */
  rdsInstanceId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * @example
   * 1603123290000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      keys: 'Keys',
      rdsInstanceId: 'RdsInstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      drdsInstanceId: 'string',
      endTime: 'number',
      keys: 'string',
      rdsInstanceId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result set of the query.
   */
  data?: DescribeRDSPerformanceResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DB53EC68-463C-4187-8D2B-C2AD8C******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeRDSPerformanceResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRDSPerformanceResponseBody;
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
      body: DescribeRDSPerformanceResponseBody,
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

export class DescribeRdsCommodityRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsPost
   */
  commodityCode?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The type of the order.
   * 
   * @example
   * 1
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      drdsInstanceId: 'DrdsInstanceId',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      drdsInstanceId: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsCommodityResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the returned result.
   * 
   * @example
   * test
   */
  data?: string;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * DC3ABA3E-0F8A-4596-9104-F5155C34315B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class DescribeRdsCommodityResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRdsCommodityResponseBody;
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
      body: DescribeRdsCommodityResponseBody,
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

export class DescribeRdsPerformanceSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-*****************
   */
  rdsInstanceId?: string[];
  /**
   * @remarks
   * The ID of the region where the streaming domain resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      rdsInstanceId: 'RdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      rdsInstanceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rdsInstanceId)) {
      $dara.Model.validateArray(this.rdsInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsPerformanceSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * A collection of objects.
   */
  rdsPerformanceInfos?: DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6876277-ECFD-4658-AC1E-A7FAD8******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      rdsPerformanceInfos: 'RdsPerformanceInfos',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsPerformanceInfos: { 'type': 'array', 'itemType': DescribeRdsPerformanceSummaryResponseBodyRdsPerformanceInfos },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.rdsPerformanceInfos)) {
      $dara.Model.validateArray(this.rdsPerformanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsPerformanceSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRdsPerformanceSummaryResponseBody;
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
      body: DescribeRdsPerformanceSummaryResponseBody,
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

export class DescribeRdsSuperAccountInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the ApsaraDB RDS for MySQL instances. Default value: **RDS**.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [\\"rm-*****************\\",\\"rm-*****************\\"]
   */
  rdsInstance?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      drdsInstanceId: 'DrdsInstanceId',
      rdsInstance: 'RdsInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      drdsInstanceId: 'string',
      rdsInstance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.rdsInstance)) {
      $dara.Model.validateArray(this.rdsInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsSuperAccountInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The privileged accounts.
   */
  dbInstances?: DescribeRdsSuperAccountInstancesResponseBodyDbInstances;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D64DE5944A1E541E0******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstances: 'DbInstances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstances: DescribeRdsSuperAccountInstancesResponseBodyDbInstances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dbInstances && typeof (this.dbInstances as any).validate === 'function') {
      (this.dbInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsSuperAccountInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRdsSuperAccountInstancesResponseBody;
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
      body: DescribeRdsSuperAccountInstancesResponseBody,
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

export class DescribeRecycleBinStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database that is created in the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
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

export class DescribeRecycleBinStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ACB5258F-25AF-4D7C-8FAA-B6FE60******
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the table recycle bin. Valid values:
   * 
   * *   disable: The table recycle bin is enabled.
   * *   enable: The table recycle bin is disabled.
   * 
   * @example
   * disable
   */
  status?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
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

export class DescribeRecycleBinStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecycleBinStatusResponseBody;
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
      body: DescribeRecycleBinStatusResponseBody,
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

export class DescribeRecycleBinTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
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

export class DescribeRecycleBinTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object returned.
   */
  data?: DescribeRecycleBinTablesResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D64DE5944A1E541E0CB908A
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeRecycleBinTablesResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecycleBinTablesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecycleBinTablesResponseBody;
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
      body: DescribeRecycleBinTablesResponseBody,
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

export class DescribeRestoreOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database involved in the backup.
   * 
   * @example
   * drds_flashback
   */
  backupDbNames?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 1918df27-4563-11e9-8403-af4fbe******
   */
  backupId?: string;
  /**
   * @remarks
   * The level of the backup. Valid values:
   * 
   * *   **DB**: The database Level
   * *   **instance **: instance level
   * 
   * @example
   * db
   */
  backupLevel?: string;
  /**
   * @remarks
   * The backup mode. Valid values: **logic** or **phy**.
   * 
   * @example
   * phy
   */
  backupMode?: string;
  /**
   * @remarks
   * The ID of the instance for which to modify the backup policy.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The preferred backup time.
   * 
   * @example
   * 2019-09-16 15:12:53
   */
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbNames: 'BackupDbNames',
      backupId: 'BackupId',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      drdsInstanceId: 'DrdsInstanceId',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbNames: 'string',
      backupId: 'string',
      backupLevel: 'string',
      backupMode: 'string',
      drdsInstanceId: 'string',
      preferredBackupTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0AD2DE5D-B86B-40B5-9678-487D37******
   */
  requestId?: string;
  /**
   * @remarks
   * The returned data object.
   */
  restoreOrderDO?: DescribeRestoreOrderResponseBodyRestoreOrderDO;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreOrderDO: 'RestoreOrderDO',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreOrderDO: DescribeRestoreOrderResponseBodyRestoreOrderDO,
      success: 'boolean',
    };
  }

  validate() {
    if(this.restoreOrderDO && typeof (this.restoreOrderDO as any).validate === 'function') {
      (this.restoreOrderDO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRestoreOrderResponseBody;
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
      body: DescribeRestoreOrderResponseBody,
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

export class DescribeShardTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * jjjjjj_ppppp
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the table that you want to convert or shard.
   * 
   * This parameter is required.
   * 
   * @example
   * a1
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The name of the table that is generated after you convert or shard the table.
   * 
   * This parameter is required.
   * 
   * @example
   * a2
   */
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the data that is returned.
   */
  data?: DescribeShardTaskInfoResponseBodyData;
  /**
   * @remarks
   * Indicates the unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * 5D64DE5944A1E541E0CB908A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeShardTaskInfoResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardTaskInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeShardTaskInfoResponseBody;
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
      body: DescribeShardTaskInfoResponseBody,
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

export class DescribeSqlFlashbakTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds****c6vxxyzd
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 5D64DE59-44A1-E541-E0CB-B7E5C4305162
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates the information about flashback tasks.
   */
  sqlFlashbackTasks?: DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasks;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sqlFlashbackTasks: 'SqlFlashbackTasks',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sqlFlashbackTasks: DescribeSqlFlashbakTaskResponseBodySqlFlashbackTasks,
      success: 'boolean',
    };
  }

  validate() {
    if(this.sqlFlashbackTasks && typeof (this.sqlFlashbackTasks as any).validate === 'function') {
      (this.sqlFlashbackTasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbakTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSqlFlashbakTaskResponseBody;
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
      body: DescribeSqlFlashbakTaskResponseBody,
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

export class DescribeTableRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_flashback
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the PolarDB-X 1.0 instance is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * employee_split
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the returned data.
   */
  data?: DescribeTableResponseBodyData;
  /**
   * @remarks
   * Indicates the unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * B5644ABB-559A-4A1C-83F2-9E7209******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeTableResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTableResponseBody;
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
      body: DescribeTableResponseBody,
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

export class DescribeTableListByTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_flash****
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga76p6****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field that you specify for your query.
   * 
   * @example
   * drdshbga76p61861
   */
  query?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of tables. Valid values:
   * 
   * This parameter is required.
   * 
   * @example
   * SINGLE
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dbName: 'string',
      drdsInstanceId: 'string',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      tableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableListByTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the information about tables.
   */
  list?: DescribeTableListByTypeResponseBodyList[];
  /**
   * @remarks
   * Indicates the page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Indicates the number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates the unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * B360F47B-59E3-4D1C-BA03-6BFB1C993F88
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates the total number of returned tables.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeTableListByTypeResponseBodyList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableListByTypeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTableListByTypeResponseBody;
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
      body: DescribeTableListByTypeResponseBody,
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

export class DescribeTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the database whose tables you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The number of tables returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query condition. The value of this parameter is the ID of the PolarDB-X 1.0 instance.
   * 
   * @example
   * drds************
   */
  query?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dbName: 'string',
      drdsInstanceId: 'string',
      pageSize: 'number',
      query: 'string',
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

export class DescribeTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned tables.
   */
  list?: DescribeTablesResponseBodyList[];
  /**
   * @remarks
   * The number of returned pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tables returned per page.
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
   * 83AC3D7E-461C-4D87-8ACD-6CC295******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned tables.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeTablesResponseBodyList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTablesResponseBody;
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
      body: DescribeTablesResponseBody,
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

export class DisableSqlAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database for which you want to disable the SQL audit feature.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSqlAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E273749A-9A33-44CF-ABE7-0CB19C******
   */
  requestId?: string;
  /**
   * @remarks
   * The return result.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

export class DisableSqlAuditResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableSqlAuditResponseBody;
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
      body: DisableSqlAuditResponseBody,
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

export class EnableInstanceIpv6AddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
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

export class EnableInstanceIpv6AddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7E9F7F16-05B5-42DA-94D6-E36402******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class EnableInstanceIpv6AddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableInstanceIpv6AddressResponseBody;
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
      body: EnableInstanceIpv6AddressResponseBody,
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

export class EnableSqlAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database for which you want to enable the SQL audit feature.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to backtrack historical SQL statements for auditing.
   * 
   * @example
   * true
   */
  isRecall?: boolean;
  /**
   * @remarks
   * The timestamp that indicates when the backtracking ends. Unit: milliseconds.
   * 
   * > The end time of the backtracking must be later than the start time of the backtracking.
   * 
   * @example
   * 1568875132000
   */
  recallEndTimestamp?: string;
  /**
   * @remarks
   * The timestamp that indicates when the backtracking starts. Unit: milliseconds.
   * 
   * @example
   * 1568875132000
   */
  recallStartTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      isRecall: 'IsRecall',
      recallEndTimestamp: 'RecallEndTimestamp',
      recallStartTimestamp: 'RecallStartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      isRecall: 'boolean',
      recallEndTimestamp: 'string',
      recallStartTimestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlAuditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 463A5F0F-12AD-4544-A902-B2B983******
   */
  requestId?: string;
  /**
   * @remarks
   * Indices whether the SQL audit feature is enabled.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

export class EnableSqlAuditResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableSqlAuditResponseBody;
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
      body: EnableSqlAuditResponseBody,
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

export class EnableSqlFlashbackMatchSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database you want to back up.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for PostgreSQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSqlFlashbackMatchSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 463A5F0F-12AD-4544-A902-B2B983******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether SqlFlashbackMatchSwitch is enabled or not.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was sent successfully or not.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

export class EnableSqlFlashbackMatchSwitchResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableSqlFlashbackMatchSwitchResponseBody;
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
      body: EnableSqlFlashbackMatchSwitchResponseBody,
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

export class FlashbackRecycleBinTableRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the table belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the instance to which the table belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the logical table to be restored.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlashbackRecycleBinTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the deleted logical table is restored.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 463A5F0F-12AD-4544-A902-B2B983******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class FlashbackRecycleBinTableResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FlashbackRecycleBinTableResponseBody;
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
      body: FlashbackRecycleBinTableResponseBody,
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

export class GetDrdsDbRdsRelationInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the DRDS database.
   * 
   * This parameter is required.
   * 
   * @example
   * testDb
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga948vbpd2
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDrdsDbRdsRelationInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The structure information about the storage instances of the DRDS database. Each entry corresponds to a primary storage instance.
   */
  data?: GetDrdsDbRdsRelationInfoResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 82FD0D9B-9A65-40D3-B1D9-8851B1D4AF75
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetDrdsDbRdsRelationInfoResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDrdsDbRdsRelationInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDrdsDbRdsRelationInfoResponseBody;
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
      body: GetDrdsDbRdsRelationInfoResponseBody,
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specify the token that is used to display the returned tags on multiple pages.
   * 
   * @example
   * 6ab4640a-479b-41d0-ad3c-c6e888bc3d8f
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which the resource is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to INSTANCE.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that is used to display the returned tags on multiple pages.
   * 
   * @example
   * 6ab4640a-479b-41d0-ad3c-c6e888bc3d8f
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 58CE1CB0-F0F4-4BA3-B876-135DC47DF52F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list of returned tags.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
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

export class ManagePrivateRdsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom ApsaraDB RDS instance at the storage layer.
   * 
   * > You can call the [DescribeDrdsRdsInstances](https://help.aliyun.com/document_detail/215526.html) operation to query the details of all ApsaraDB RDS instances, including the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * > You can call the [DescribeDrdsInstances](https://help.aliyun.com/document_detail/139284.html) operation to query the details of all PolarDB-X 1.0 instances within an Alibaba Cloud account, including the IDs of the instances.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The JSON string that consists of request parameters and the values of the request parameters of an operation that you need to call for the custom ApsaraDB RDS instance. The value of a request parameter is of the STRING type. Example: `{NodeId:"1797****"}`.
   * 
   * For more information about the request parameters and valid values of the request parameters of each operation, see the request parameter sections in the following topics:
   * 
   * *   [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/26231.html)
   * *   [DescribeAvailableClasses](https://help.aliyun.com/document_detail/196546.html)
   * *   [DescribeSQLCollectorPolicy](https://help.aliyun.com/document_detail/26292.html)
   * *   [ModifySQLCollectorPolicy](https://help.aliyun.com/document_detail/26293.html)
   * *   [DescribeParameters](https://help.aliyun.com/document_detail/26285.html)
   * *   [ModifyParameter](https://help.aliyun.com/document_detail/26286.html)
   * *   [DescribeDBInstanceHAConfig](https://help.aliyun.com/document_detail/26244.html)
   * *   [SwitchDBInstanceHA](https://help.aliyun.com/document_detail/26251.html)
   * 
   * > Among the required request parameters of the preceding operations, you do not need to specify the `Action` and `DBInstanceId` parameters. You must specify all the other required request parameters.
   * 
   * @example
   * {NodeId:"1797****"}
   */
  params?: string;
  /**
   * @remarks
   * The operation that you want to perform on the custom ApsaraDB RDS instance. Valid values:
   * 
   * *   **DescribeDBInstanceAttribute**: queries the details of the custom ApsaraDB RDS instance.
   * *   **DescribeAvailableClasses**: queries the specifications that are supported for a custom ApsaraDB RDS instance. The specifications include the instance type and the storage capacity.
   * *   **DescribeSQLCollectorPolicy**: queries whether the SQL Explorer (SQL Audit) feature is enabled for custom ApsaraDB RDS instance.
   * *   **ModifySQLCollectorPolicy**: enables or disables the SQL Explorer (SQL Audit) feature for the custom ApsaraDB RDS instance.
   * *   **DescribeParameters**: queries the parameter settings of the custom ApsaraDB RDS instance.
   * *   **ModifyParameter**: modifies the parameters of the custom ApsaraDB RDS instance.
   * *   **DescribeDBInstanceHAConfig**: queries the high availability mode and data replication mode of the custom ApsaraDB RDS instance.
   * *   **SwitchDBInstanceHA**: switches workloads between the primary and secondary custom ApsaraDB RDS instances.
   * 
   * This parameter is required.
   * 
   * @example
   * SwitchDBInstanceHA
   */
  rdsAction?: string;
  /**
   * @remarks
   * The ID of the region in which the PolarDB-X 1.0 instance resides.
   * 
   * > You can call the [DescribeDrdsInstances](https://help.aliyun.com/document_detail/139284.html) operation to query the details of all PolarDB-X 1.0 instances within an Alibaba Cloud account, including the IDs of regions in which the instances reside.
   * 
   * @example
   * cn-hanzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      drdsInstanceId: 'DrdsInstanceId',
      params: 'Params',
      rdsAction: 'RdsAction',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      drdsInstanceId: 'string',
      params: 'string',
      rdsAction: 'string',
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

export class ManagePrivateRdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter result set returned for the operation that is called for the custom ApsaraDB RDS instance.
   * 
   * @example
   * {"requestId":"E63C810A-4A13-47B6-BA67-C0E23A******"}
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0237BCD2-2C7A-4F86-A766-657AF6******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class ManagePrivateRdsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ManagePrivateRdsResponseBody;
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
      body: ManagePrivateRdsResponseBody,
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

export class ModifyAccountDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the member account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The description of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for PostgreSQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      description: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F93CCD5-806F-4470-BBC7-20476A******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was sent successfully or not.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyAccountDescriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountDescriptionResponseBody;
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
      body: ModifyAccountDescriptionResponseBody,
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

export class ModifyAccountPrivilegeRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * account_sec
   */
  accountName?: string;
  dbPrivilege?: ModifyAccountPrivilegeRequestDbPrivilege[];
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbgaen89****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the PolarDB-X 1.0 instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbPrivilege: 'DbPrivilege',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbPrivilege: { 'type': 'array', 'itemType': ModifyAccountPrivilegeRequestDbPrivilege },
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbPrivilege)) {
      $dara.Model.validateArray(this.dbPrivilege);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 73559800-3c8c-11ec-bd40-99cfcff3fe1e
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyAccountPrivilegeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountPrivilegeResponseBody;
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
      body: ModifyAccountPrivilegeResponseBody,
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

export class ModifyDrdsInstanceDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsInstanceDescriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C44CA24C-C7C4-4C0F-8AC9-1343F2******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyDrdsInstanceDescriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDrdsInstanceDescriptionResponseBody;
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
      body: ModifyDrdsInstanceDescriptionResponseBody,
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

export class ModifyDrdsIpWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the DRDS database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the Message Queue for Apache Kafka instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds****c6vxxyzd
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The attribute of the IP address whitelist group.
   */
  groupAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist group.
   * 
   * @example
   * drds_******
   */
  groupName?: string;
  /**
   * @remarks
   * The modified whitelist. Separate multiple IP addresses with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 127.***.***.***,10.***.***.***
   */
  ipWhiteList?: string;
  /**
   * @remarks
   * Specifies the mode. Valid values:
   * 
   * *   `True`: append modifications
   * *   `False`: overwrite modification
   * 
   * @example
   * false
   */
  mode?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      groupAttribute: 'GroupAttribute',
      groupName: 'GroupName',
      ipWhiteList: 'IpWhiteList',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      groupAttribute: 'string',
      groupName: 'string',
      ipWhiteList: 'string',
      mode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsIpWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 933A1EC2-8260-4D4F-A56A-73BA27******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyDrdsIpWhiteListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDrdsIpWhiteListResponseBody;
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
      body: ModifyDrdsIpWhiteListResponseBody,
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

export class ModifyPolarDbReadWeightRequest extends $dara.Model {
  /**
   * @remarks
   * Polar cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The node list in the destination apsaradb for PolarDB cluster. The nodes in each cluster are separated with commas (,) and colons (:).
   * 
   * This parameter is required.
   * 
   * @example
   * pi-****************,pi-****************:pi-****************
   */
  dbNodeIds?: string;
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The weight of the PolarDB cluster. Separate multiple weights with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 14,86
   */
  weights?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
      dbNodeIds: 'DbNodeIds',
      drdsInstanceId: 'DrdsInstanceId',
      weights: 'Weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      dbName: 'string',
      dbNodeIds: 'string',
      drdsInstanceId: 'string',
      weights: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolarDbReadWeightResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B12FC174-D5CE-4A6E-83C1-0F8F86******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the database creation failure records were removed from the PolarDB-X instance.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyPolarDbReadWeightResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolarDbReadWeightResponseBody;
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
      body: ModifyPolarDbReadWeightResponseBody,
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

export class ModifyRdsReadWeightRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The names of the ApsaraDB RDS for MySQL instances. Separate the names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * rm-****************,rm-****************
   */
  instanceNames?: string;
  /**
   * @remarks
   * The weights of the ApsaraDB RDS for MySQL instances. Separate the weights with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 14,86
   */
  weights?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      instanceNames: 'InstanceNames',
      weights: 'Weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      instanceNames: 'string',
      weights: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRdsReadWeightResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * B12FC174-D5CE-4A6E-83C1-0F8F86******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyRdsReadWeightResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRdsReadWeightResponseBody;
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
      body: ModifyRdsReadWeightResponseBody,
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

export class PutStartBackupRequest extends $dara.Model {
  /**
   * @remarks
   * If you need to back up data at the database level, you must specify the list of databases to be backed up, and separate multiple databases with commas (,).
   * 
   * @example
   * db_1, db_2
   */
  backupDbNames?: string;
  /**
   * @remarks
   * The backup level. Valid values:
   * 
   * *   instance: instance
   * *   db: The database type.
   * 
   * @example
   * db
   */
  backupLevel?: string;
  /**
   * @remarks
   * The backup mode. For more information, see [backup mode](https://help.aliyun.com/document_detail/108631.html) and the valid values are as follows:
   * 
   * *   phy: fast backup
   * *   logic: Consistent backup
   * 
   * @example
   * phy
   */
  backupMode?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds****c6vxxyzd
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbNames: 'BackupDbNames',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbNames: 'string',
      backupLevel: 'string',
      backupMode: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutStartBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D64DE5944A1E541E0******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the backup task was submitted.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
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

export class PutStartBackupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutStartBackupResponseBody;
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
      body: PutStartBackupResponseBody,
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

export class RefreshDrdsAtomUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the DRDS database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDrdsAtomUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B12FC174-D5CE-4A6E-83C1-0F8F86******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the connection after refresh was successful.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

export class RefreshDrdsAtomUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshDrdsAtomUrlResponseBody;
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
      body: RefreshDrdsAtomUrlResponseBody,
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

export class ReleaseInstanceInternetAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The region where the instance is located.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
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

export class ReleaseInstanceInternetAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returned by the current API.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FD17CD3C-3355-49E8-9231-FE2DB0******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class ReleaseInstanceInternetAddressResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseInstanceInternetAddressResponseBody;
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
      body: ReleaseInstanceInternetAddressResponseBody,
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

export class RemoveBackupsSetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackupSets](https://help.aliyun.com/document_detail/139331.html) interface to query the ID of a backup set.
   * 
   * This parameter is required.
   * 
   * @example
   * ba30d5c4-a6dc-11ea-bd40-************
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveBackupsSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 70FED5BE-4DDC-4556-AD35-5A6D27******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether SQL audit was disabled for the DRDS database.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
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

export class RemoveBackupsSetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveBackupsSetResponseBody;
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
      body: RemoveBackupsSetResponseBody,
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

export class RemoveDrdsDbRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database you want to back up.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the DRDS instance to which the destination database belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsDbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B12FC174-D5CE-4A6E-83C1-0F8F86******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class RemoveDrdsDbResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveDrdsDbResponseBody;
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
      body: RemoveDrdsDbResponseBody,
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

export class RemoveDrdsDbFailedRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the DRDS database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for PostgreSQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsDbFailedRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D98BC610-5A91-453A-BC44-5873EF******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the database creation failure records were deleted from the DRDS instance.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

export class RemoveDrdsDbFailedRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveDrdsDbFailedRecordResponseBody;
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
      body: RemoveDrdsDbFailedRecordResponseBody,
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

export class RemoveDrdsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3140FC7-B78B-4D8E-B0C8-926D28******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class RemoveDrdsInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveDrdsInstanceResponseBody;
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
      body: RemoveDrdsInstanceResponseBody,
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

export class RemoveInstanceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the member account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInstanceAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3140FC7-B78B-4D8E-B0C8-926D28******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class RemoveInstanceAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveInstanceAccountResponseBody;
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
      body: RemoveInstanceAccountResponseBody,
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

export class RemoveRecycleBinTableRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the logical table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveRecycleBinTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the table in the recycle bin is deleted.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3140FC7-B78B-4D8E-B0C8-926D28******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class RemoveRecycleBinTableResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveRecycleBinTableResponseBody;
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
      body: RemoveRecycleBinTableResponseBody,
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

export class RestartDrdsInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDrdsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3140FC7-B78B-4D8E-B0C8-926D28******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the database creation failure records were removed from the PolarDB-X instance.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDrdsInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartDrdsInstanceResponseBody;
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
      body: RestartDrdsInstanceResponseBody,
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

export class RollbackInstanceVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
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
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
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

export class RollbackInstanceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance version was rolled back.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class RollbackInstanceVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RollbackInstanceVersionResponseBody;
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
      body: RollbackInstanceVersionResponseBody,
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

export class SetBackupLocalRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbgag23d13fds
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature to forcibly delete binary log files if the used storage space reaches 90% of the total storage space or the remaining storage space is less than 5 GB. Valid values: 1 and 0. A value of 1 specifies to enable this feature. A value of 0 specifies not to enable this feature.
   * 
   * @example
   * 80
   */
  highSpaceUsageProtection?: string;
  /**
   * @remarks
   * The number of hours for which log backup files are retained on the instance. Valid values: 0 to 168. Default value: 18. A value of 0 indicates that log backup files are not retained.
   * 
   * @example
   * 12
   */
  localLogRetentionHours?: string;
  /**
   * @remarks
   * The maximum storage space usage that is allowed for log files on the instance. Valid values: 0 to 50. Default value: 30.
   * 
   * @example
   * 30
   */
  localLogRetentionSpace?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      highSpaceUsageProtection: 'HighSpaceUsageProtection',
      localLogRetentionHours: 'LocalLogRetentionHours',
      localLogRetentionSpace: 'LocalLogRetentionSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      highSpaceUsageProtection: 'string',
      localLogRetentionHours: 'string',
      localLogRetentionSpace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupLocalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6F70CE62-5077-4B7B-95BC-4DAC45614DBE
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
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

export class SetBackupLocalResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetBackupLocalResponseBody;
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
      body: SetBackupLocalResponseBody,
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

export class SetBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The databases to be backed up. Separate multiple databases with commas (,).
   * 
   * >  This parameter takes effect only when the backup level is database level.
   * 
   * @example
   * test1,test2
   */
  backupDbNames?: string;
  /**
   * @remarks
   * The level of the backup. Valid values:
   * 
   * *   db: The database type.
   * *   instance: instance
   * 
   * @example
   * db
   */
  backupLevel?: string;
  /**
   * @remarks
   * Specifies whether to enable log Backup. Valid values:
   * 
   * *   1: enabled.
   * *   0: disabled.
   * 
   * @example
   * 1
   */
  backupLog?: string;
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * *   **Logic **: logical backup
   * *   **phy**: physical backup
   * 
   * @example
   * phy
   */
  backupMode?: string;
  /**
   * @remarks
   * The retention period of the backup data. Value range: 7 to 730.
   * 
   * @example
   * 7
   */
  dataBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The log retention period. Valid values: 7 to 730. This value must be less than or equal to the number of data backup days.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The end time of the backup.
   * 
   * @example
   * 12:30:30
   */
  preferredBackupEndTime?: string;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * 
   * *   0: Monday
   * *   1: Tuesday
   * *   2: Wednesday
   * *   3: Thursday
   * *   4: Friday
   * *   5: Saturday
   * *   6: Sunday
   * 
   * @example
   * 0
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The start time of the backup.
   * 
   * @example
   * 11:30:30
   */
  preferredBackupStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbNames: 'BackupDbNames',
      backupLevel: 'BackupLevel',
      backupLog: 'BackupLog',
      backupMode: 'BackupMode',
      dataBackupRetentionPeriod: 'DataBackupRetentionPeriod',
      drdsInstanceId: 'DrdsInstanceId',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      preferredBackupEndTime: 'PreferredBackupEndTime',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupStartTime: 'PreferredBackupStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbNames: 'string',
      backupLevel: 'string',
      backupLog: 'string',
      backupMode: 'string',
      dataBackupRetentionPeriod: 'string',
      drdsInstanceId: 'string',
      logBackupRetentionPeriod: 'string',
      preferredBackupEndTime: 'string',
      preferredBackupPeriod: 'string',
      preferredBackupStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3140FC7-B78B-4D8E-B0C8-926D28******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the backup policy was successfully configured.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the database creation failure records were removed from the DRDS instance.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
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

export class SetBackupPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetBackupPolicyResponseBody;
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
      body: SetBackupPolicyResponseBody,
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

export class SetupBroadcastTablesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to activate a broadcast table for the database.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The name of the database for which you want to configure a broadcast table.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the PolarDB-X 1.0 instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
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

export class SetupBroadcastTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the broadcast table is configured.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3140FC7-B78B-4D8E-B0C8-926D28******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class SetupBroadcastTablesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetupBroadcastTablesResponseBody;
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
      body: SetupBroadcastTablesResponseBody,
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

export class SetupDrdsParamsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  data?: SetupDrdsParamsRequestData[];
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance for which you want to configure parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsjiii1b49****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The resource for which you want to configure parameters. Valid values:
   * 
   * *   **INSTANCE**: Configure parameters for the instance.
   * *   **DB**: Configure parameters for the databases of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * DB
   */
  paramLevel?: string;
  /**
   * @remarks
   * The ID of the region in which the PolarDB-X 1.0 instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      drdsInstanceId: 'DrdsInstanceId',
      paramLevel: 'ParamLevel',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': SetupDrdsParamsRequestData },
      drdsInstanceId: 'string',
      paramLevel: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupDrdsParamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class SetupDrdsParamsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetupDrdsParamsResponseBody;
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
      body: SetupDrdsParamsResponseBody,
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

export class SetupRecycleBinStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies the status of the table recycle bin. Valid values:
   * 
   * *   enable: The table recycle bin is enabled.
   * *   disable: The table recycle bin is disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   */
  statusAction?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      statusAction: 'StatusAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      statusAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetupRecycleBinStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the table recycle bin is enabled.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3140FC7-B78B-4D8E-B0C8-926D28******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class SetupRecycleBinStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetupRecycleBinStatusResponseBody;
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
      body: SetupRecycleBinStatusResponseBody,
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

export class SetupTableRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable full table scan.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  allowFullTableScan?: boolean;
  /**
   * @remarks
   * The name of the database in which the table resides.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the streaming domain resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableName?: string[];
  static names(): { [key: string]: string } {
    return {
      allowFullTableScan: 'AllowFullTableScan',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullTableScan: 'boolean',
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
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

export class SetupTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use a full table scan.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3140FC7-B78B-4D8E-B0C8-926D28******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class SetupTableResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetupTableResponseBody;
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
      body: SetupTableResponseBody,
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

export class StartRestoreRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database to be restored. Separate multiple databases with commas (,).
   * 
   * >  If you do not specify any database name, all databases in the instance are restored by default.
   * 
   * @example
   * test1,test2
   */
  backupDbNames?: string;
  /**
   * @remarks
   * The ID of the DRDS backup set.
   * 
   * >  If you do not specify this parameter, the system restores data by time (PreferredBackupTime).
   * 
   * @example
   * 23***
   */
  backupId?: string;
  /**
   * @remarks
   * The level of the backup. Valid values:
   * 
   * *   db: The database level.
   * *   instance: the instance level.
   * 
   * @example
   * db
   */
  backupLevel?: string;
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * *   logic: the logical backup.
   * *   phy: fast backup
   * 
   * @example
   * phy
   */
  backupMode?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rds********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The restoration time of the instance, in the format of`  yyyy-MM-dd HH:mm:ss `.
   * 
   * @example
   * 2019-09-10 20:18:18
   */
  preferredBackupTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupDbNames: 'BackupDbNames',
      backupId: 'BackupId',
      backupLevel: 'BackupLevel',
      backupMode: 'BackupMode',
      drdsInstanceId: 'DrdsInstanceId',
      preferredBackupTime: 'PreferredBackupTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupDbNames: 'string',
      backupId: 'string',
      backupLevel: 'string',
      backupMode: 'string',
      drdsInstanceId: 'string',
      preferredBackupTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRestoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 721C71DD-D3D0-4327-BFDD-678326******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether SQL audit was disabled for the DRDS database.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
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

export class StartRestoreResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartRestoreResponseBody;
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
      body: StartRestoreResponseBody,
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

export class SubmitCleanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database that is scaled out.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The scale-out type. Valid values:
   * 
   * *   smooth_expand: smooth scale-out
   * *   hot_expand: hot-spot scale-out
   * 
   * This parameter is required.
   * 
   * @example
   * smooth_expand
   */
  expandType?: string;
  /**
   * @remarks
   * The job ID of the scale-out task. The value of this parameter is the same as that of the ParentJobId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the scale-out task. This parameter is returned if you send a request for the smooth scale-out task.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  parentJobId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      expandType: 'ExpandType',
      jobId: 'JobId',
      parentJobId: 'ParentJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      expandType: 'string',
      jobId: 'string',
      parentJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCleanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class SubmitCleanTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitCleanTaskResponseBody;
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
      body: SubmitCleanTaskResponseBody,
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

export class SubmitHotExpandPreCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   RDS
   * *   PolarDB
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * The name of the PolarDB-X database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drd*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableList?: string[];
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      tableList: 'TableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
      tableList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableList)) {
      $dara.Model.validateArray(this.tableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandPreCheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the task.
   * 
   * @example
   * scucess
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE104D26-AC19-49B5-AC67-947F69*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 11111
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandPreCheckTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitHotExpandPreCheckTaskResponseBody;
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
      body: SubmitHotExpandPreCheckTaskResponseBody,
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

export class SubmitHotExpandTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga1138****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The information about the database on which you want to perform hot-spot scale-out.
   * 
   * This parameter is required.
   */
  extendedMapping?: SubmitHotExpandTaskRequestExtendedMapping[];
  /**
   * @remarks
   * The information about the instance to which the hot-spot database belongs.
   * 
   * This parameter is required.
   */
  instanceDbMapping?: SubmitHotExpandTaskRequestInstanceDbMapping[];
  /**
   * @remarks
   * The information about the hot-spot database.
   * 
   * This parameter is required.
   */
  mapping?: SubmitHotExpandTaskRequestMapping[];
  /**
   * @remarks
   * The information about the privileged account.
   */
  supperAccountMapping?: SubmitHotExpandTaskRequestSupperAccountMapping[];
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * test
   */
  taskDesc?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * test
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      extendedMapping: 'ExtendedMapping',
      instanceDbMapping: 'InstanceDbMapping',
      mapping: 'Mapping',
      supperAccountMapping: 'SupperAccountMapping',
      taskDesc: 'TaskDesc',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      extendedMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestExtendedMapping },
      instanceDbMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestInstanceDbMapping },
      mapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestMapping },
      supperAccountMapping: { 'type': 'array', 'itemType': SubmitHotExpandTaskRequestSupperAccountMapping },
      taskDesc: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendedMapping)) {
      $dara.Model.validateArray(this.extendedMapping);
    }
    if(Array.isArray(this.instanceDbMapping)) {
      $dara.Model.validateArray(this.instanceDbMapping);
    }
    if(Array.isArray(this.mapping)) {
      $dara.Model.validateArray(this.mapping);
    }
    if(Array.isArray(this.supperAccountMapping)) {
      $dara.Model.validateArray(this.supperAccountMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotExpandTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B6B7BDC-575D-4A77-A4F8-24B7EFERV45Y
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class SubmitHotExpandTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitHotExpandTaskResponseBody;
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
      body: SubmitHotExpandTaskResponseBody,
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

export class SubmitSmoothExpandPreCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   RDS
   * *   POLARDB
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * The name of the PolarDB-X database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*******
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the precheck task.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE104D26-AC19-49B5-AC67-947F69******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the precheck task.
   * 
   * @example
   * 11111
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSmoothExpandPreCheckResponseBody;
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
      body: SubmitSmoothExpandPreCheckResponseBody,
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

export class SubmitSmoothExpandPreCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the PolarDB-X 1.0 database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds823s4esd
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the precheck task was submitted.
   * 
   * @example
   * scucess
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-23ERW
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 2321
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmoothExpandPreCheckTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSmoothExpandPreCheckTaskResponseBody;
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
      body: SubmitSmoothExpandPreCheckTaskResponseBody,
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

export class SubmitSqlFlashbackTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the DRDS database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The time when the SQL flashback task ends.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-10 23:23:23
   */
  endTime?: string;
  /**
   * @remarks
   * The restoration type. Valid values:
   * 
   * *   1: Image restoration
   * *   0: reverse recovery
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  recallRestoreType?: number;
  /**
   * @remarks
   * Exact match or fuzzy match. Valid values:
   * 
   * *   0: the exact match.
   * *   1: the fuzzy match.
   * 
   * @example
   * 0
   */
  recallType?: number;
  /**
   * @remarks
   * The primary key of flashback SQL.
   * 
   * @example
   * 11111
   */
  sqlPk?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values: INSERT, UPDATE, and DELETE. Separate multiple types with commas (,).
   * 
   * @example
   * INSERT,UPDATE
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time of the flashback SQL statement.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-09-10 20:23:23
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the table where the flashback SQL operation was performed.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The Trace ID of the flashback SQL.
   * 
   * @example
   * ase*****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      recallRestoreType: 'RecallRestoreType',
      recallType: 'RecallType',
      sqlPk: 'SqlPk',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      tableName: 'TableName',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      endTime: 'string',
      recallRestoreType: 'number',
      recallType: 'number',
      sqlPk: 'string',
      sqlType: 'string',
      startTime: 'string',
      tableName: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSqlFlashbackTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the database creation failure records were removed from the DRDS instance.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the replication task.
   * 
   * @example
   * 1111
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSqlFlashbackTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSqlFlashbackTaskResponseBody;
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
      body: SubmitSqlFlashbackTaskResponseBody,
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

export class SwitchGlobalBroadcastTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
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

export class SwitchGlobalBroadcastTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the mode of broadcast tables was switched from the multi-write mode to the asynchronous link mode.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

export class SwitchGlobalBroadcastTypeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchGlobalBroadcastTypeResponseBody;
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
      body: SwitchGlobalBroadcastTypeResponseBody,
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

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the resource is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to INSTANCE.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE5D94E3-3C93-3594-95D9-AAED2A980915
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
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

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags of the resource.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * drds********
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Set the value to INSTANCE.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @example
   * color
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the database creation failure records were removed from the DRDS instance.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
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

export class UpdateInstanceNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the retention period of the classic network endpoint. Unit: days.
   * 
   * @example
   * 30
   */
  classicExpiredDays?: number;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds******
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to retain the classic network endpoint.
   * 
   * @example
   * true
   */
  retainClassic?: boolean;
  /**
   * @remarks
   * The network type of the PolarDB-X 1.0 instance. Valid values:
   * 
   * *   vpc: Virtual Private Cloud (VPC)
   * *   classic: classic network
   * 
   * This parameter is required.
   * 
   * @example
   * classic
   */
  srcInstanceNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      classicExpiredDays: 'ClassicExpiredDays',
      drdsInstanceId: 'DrdsInstanceId',
      retainClassic: 'RetainClassic',
      srcInstanceNetworkType: 'SrcInstanceNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicExpiredDays: 'number',
      drdsInstanceId: 'string',
      retainClassic: 'boolean',
      srcInstanceNetworkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-*****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateInstanceNetworkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceNetworkResponseBody;
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
      body: UpdateInstanceNetworkResponseBody,
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

export class UpdatePrivateRdsClassRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use vouchers to offset the purchase fees. Valid values: **true** and **false**. Default value: false.
   * 
   * > If you downgrade the specifications of an instance after you use the vouchers, the vouchers used for the purchase cannot be refunded.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The ID of the custom ApsaraDB RDS instance at the storage layer.
   * 
   * > You can call the [DescribeDrdsRdsInstances](~~xxxx~~) operation to query the details of all ApsaraDB RDS instances at the storage layer of a PolarDB-X 1.0 instance, including the IDs of the ApsaraDB RDS instances.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * > You can call the [DescribeDrdsInstances](https://help.aliyun.com/document_detail/139284.html) operation to query the details of all PolarDB-X 1.0 instances within an Alibaba Cloud account, including the IDs of the instances.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * @example
   * 12
   */
  prePayDuration?: number;
  /**
   * @remarks
   * The new instance type of the custom ApsaraDB RDS instance at the storage layer.
   * 
   * > You can call the [DescribeAvailableClasses](https://help.aliyun.com/document_detail/196546.html) operation to view the specifications that are supported for a custom ApsaraDB RDS instance. The specifications include the instance type and the storage capacity.
   * 
   * @example
   * rds.mysql.c1.xlarge
   */
  rdsClass?: string;
  /**
   * @remarks
   * The new storage capacity of the custom ApsaraDB RDS instance at the storage layer.
   * 
   * > You can call the [DescribeAvailableClasses](https://help.aliyun.com/document_detail/196546.html) operation to view the specifications that are supported for a custom ApsaraDB RDS instance. The specifications include the instance type and the storage capacity.
   * 
   * @example
   * 50
   */
  storage?: string;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      DBInstanceId: 'DBInstanceId',
      drdsInstanceId: 'DrdsInstanceId',
      prePayDuration: 'PrePayDuration',
      rdsClass: 'RdsClass',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      DBInstanceId: 'string',
      drdsInstanceId: 'string',
      prePayDuration: 'number',
      rdsClass: 'string',
      storage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateRdsClassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * {     "orderId": "209136011******"   }
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 57D86AB4-8703-4DF4-BAB6-F7DE44******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class UpdatePrivateRdsClassResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePrivateRdsClassResponseBody;
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
      body: UpdatePrivateRdsClassResponseBody,
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

export class UpdateResourceGroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that you want to transfer.
   * 
   * >  You can call the [DescribeDrdsInstances](https://help.aliyun.com/document_detail/139284.html) operation to view the details of the instances under the account, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the resource group that you want to specify.
   * 
   * >  You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to view the details of the resource groups, including the resource group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-***************
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the region where the instance you want to transfer is located.
   * 
   * >  You can call the [DescribeDrdsInstances](https://help.aliyun.com/document_detail/139284.html) operation to view the details of the instances under the account, including the region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      newResourceGroupId: 'string',
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

export class UpdateResourceGroupAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 91C7CAB5-3B2E-4FB6-893C-0162C0******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateResourceGroupAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceGroupAttributeResponseBody;
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
      body: UpdateResourceGroupAttributeResponseBody,
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

export class UpgradeHiStoreInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdssad23sdfc
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the column-oriented storage instance.
   * 
   * This parameter is required.
   * 
   * @example
   * hi-sesex2e
   */
  historeInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      historeInstanceId: 'HistoreInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      historeInstanceId: 'string',
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

export class UpgradeHiStoreInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates that the request was successful. An error message was returned if the request failed.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-23ERW
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class UpgradeHiStoreInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeHiStoreInstanceResponseBody;
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
      body: UpgradeHiStoreInstanceResponseBody,
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

export class UpgradeInstanceVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance that you want to upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbgaen89****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The version number of the PolarDB-X 1.0 instance. You can leave this parameter unspecified.
   * 
   * @example
   * t-drds-server-5.4.12-16348095.noarch.rpm
   */
  rpm?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      rpm: 'Rpm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      regionId: 'string',
      rpm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4305162
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class UpgradeInstanceVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeInstanceVersionResponseBody;
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
      body: UpgradeInstanceVersionResponseBody,
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

export class ValidateShardTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds23ds****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the PolarDB-X 1.0 instance is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the table or table shard on which you want to perform the task.
   * 
   * This parameter is required.
   * 
   * @example
   * buyer
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The name of the table or table shard on which you perform the task.
   * 
   * This parameter is required.
   * 
   * @example
   * buyer_new
   */
  targetTableName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **SINGLE_TO_SHARD**: converts a single table to a table shard.
   * *   **SHARD_TO_SINGLE**: converts a table shard to a single table.
   * *   **SHARD_TO_SHARD**: converts a table shard to another table shard.
   * 
   * This parameter is required.
   * 
   * @example
   * SINGLE_TO_SHARD
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShardTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the check results.
   */
  list?: ValidateShardTaskResponseBodyList[];
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 0B6B7BDC-575D-4A77-A4F8-24B7EFAS45FG
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ValidateShardTaskResponseBodyList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShardTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidateShardTaskResponseBody;
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
      body: ValidateShardTaskResponseBody,
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
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "drds.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2-pop': "drds.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "drds.ap-southeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "drds.aliyuncs.com",
      'cn-beijing-finance-pop': "drds.aliyuncs.com",
      'cn-beijing-gov-1': "drds.aliyuncs.com",
      'cn-beijing-nu16-b01': "drds.aliyuncs.com",
      'cn-chengdu': "drds.aliyuncs.com",
      'cn-edge-1': "drds.aliyuncs.com",
      'cn-fujian': "drds.aliyuncs.com",
      'cn-haidian-cm12-c01': "drds.aliyuncs.com",
      'cn-hangzhou-bj-b01': "drds.aliyuncs.com",
      'cn-hangzhou-finance': "drds.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "drds.aliyuncs.com",
      'cn-hangzhou-test-306': "drds.aliyuncs.com",
      'cn-hongkong-finance-pop': "drds.aliyuncs.com",
      'cn-qingdao-nebula': "drds.aliyuncs.com",
      'cn-shanghai-et15-b01': "drds.aliyuncs.com",
      'cn-shanghai-et2-b01': "drds.aliyuncs.com",
      'cn-shanghai-inner': "drds.aliyuncs.com",
      'cn-shanghai-internal-test-1': "drds.aliyuncs.com",
      'cn-shenzhen-inner': "drds.aliyuncs.com",
      'cn-shenzhen-st4-d01': "drds.aliyuncs.com",
      'cn-shenzhen-su18-b01': "drds.aliyuncs.com",
      'cn-wuhan': "drds.aliyuncs.com",
      'cn-yushanfang': "drds.aliyuncs.com",
      'cn-zhangbei-na61-b01': "drds.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "drds.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "drds.aliyuncs.com",
      'eu-central-1': "drds.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "drds.ap-southeast-1.aliyuncs.com",
      'eu-west-1-oxs': "drds.ap-southeast-1.aliyuncs.com",
      'me-east-1': "drds.ap-southeast-1.aliyuncs.com",
      'rus-west-1-pop': "drds.ap-southeast-1.aliyuncs.com",
      'us-west-1': "drds.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("drds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - ChangeAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeAccountPasswordResponse
   */
  async changeAccountPasswordWithOptions(request: ChangeAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<ChangeAccountPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeAccountPassword",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeAccountPasswordResponse>(await this.callApi(params, req, runtime), new ChangeAccountPasswordResponse({}));
    } else {
      return $dara.cast<ChangeAccountPasswordResponse>(await this.execute(params, req, runtime), new ChangeAccountPasswordResponse({}));
    }

  }

  /**
   * @param request - ChangeAccountPasswordRequest
   * @returns ChangeAccountPasswordResponse
   */
  async changeAccountPassword(request: ChangeAccountPasswordRequest): Promise<ChangeAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeAccountPasswordWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeInstanceAzoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeInstanceAzoneResponse
   */
  async changeInstanceAzoneWithOptions(request: ChangeInstanceAzoneRequest, runtime: $dara.RuntimeOptions): Promise<ChangeInstanceAzoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeVSwitch)) {
      query["ChangeVSwitch"] = request.changeVSwitch;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.drdsRegionId)) {
      query["DrdsRegionId"] = request.drdsRegionId;
    }

    if (!$dara.isNull(request.newVSwitch)) {
      query["NewVSwitch"] = request.newVSwitch;
    }

    if (!$dara.isNull(request.originAzoneId)) {
      query["OriginAzoneId"] = request.originAzoneId;
    }

    if (!$dara.isNull(request.targetAzoneId)) {
      query["TargetAzoneId"] = request.targetAzoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeInstanceAzone",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeInstanceAzoneResponse>(await this.callApi(params, req, runtime), new ChangeInstanceAzoneResponse({}));
    } else {
      return $dara.cast<ChangeInstanceAzoneResponse>(await this.execute(params, req, runtime), new ChangeInstanceAzoneResponse({}));
    }

  }

  /**
   * @param request - ChangeInstanceAzoneRequest
   * @returns ChangeInstanceAzoneResponse
   */
  async changeInstanceAzone(request: ChangeInstanceAzoneRequest): Promise<ChangeInstanceAzoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeInstanceAzoneWithOptions(request, runtime);
  }

  /**
   * @param request - CheckDrdsDbNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDrdsDbNameResponse
   */
  async checkDrdsDbNameWithOptions(request: CheckDrdsDbNameRequest, runtime: $dara.RuntimeOptions): Promise<CheckDrdsDbNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDrdsDbName",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckDrdsDbNameResponse>(await this.callApi(params, req, runtime), new CheckDrdsDbNameResponse({}));
    } else {
      return $dara.cast<CheckDrdsDbNameResponse>(await this.execute(params, req, runtime), new CheckDrdsDbNameResponse({}));
    }

  }

  /**
   * @param request - CheckDrdsDbNameRequest
   * @returns CheckDrdsDbNameResponse
   */
  async checkDrdsDbName(request: CheckDrdsDbNameRequest): Promise<CheckDrdsDbNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDrdsDbNameWithOptions(request, runtime);
  }

  /**
   * Verifies whether scale-out operations such as smooth scale-out can be performed on a PolarDB-X database.
   * 
   * @param request - CheckExpandStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckExpandStatusResponse
   */
  async checkExpandStatusWithOptions(request: CheckExpandStatusRequest, runtime: $dara.RuntimeOptions): Promise<CheckExpandStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckExpandStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckExpandStatusResponse>(await this.callApi(params, req, runtime), new CheckExpandStatusResponse({}));
    } else {
      return $dara.cast<CheckExpandStatusResponse>(await this.execute(params, req, runtime), new CheckExpandStatusResponse({}));
    }

  }

  /**
   * Verifies whether scale-out operations such as smooth scale-out can be performed on a PolarDB-X database.
   * 
   * @param request - CheckExpandStatusRequest
   * @returns CheckExpandStatusResponse
   */
  async checkExpandStatus(request: CheckExpandStatusRequest): Promise<CheckExpandStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkExpandStatusWithOptions(request, runtime);
  }

  /**
   * Checks whether the SQL audit feature is enabled for the logical database of a PolarDB-X 1.0 instance.
   * 
   * @param request - CheckSqlAuditEnableStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSqlAuditEnableStatusResponse
   */
  async checkSqlAuditEnableStatusWithOptions(request: CheckSqlAuditEnableStatusRequest, runtime: $dara.RuntimeOptions): Promise<CheckSqlAuditEnableStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckSqlAuditEnableStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckSqlAuditEnableStatusResponse>(await this.callApi(params, req, runtime), new CheckSqlAuditEnableStatusResponse({}));
    } else {
      return $dara.cast<CheckSqlAuditEnableStatusResponse>(await this.execute(params, req, runtime), new CheckSqlAuditEnableStatusResponse({}));
    }

  }

  /**
   * Checks whether the SQL audit feature is enabled for the logical database of a PolarDB-X 1.0 instance.
   * 
   * @param request - CheckSqlAuditEnableStatusRequest
   * @returns CheckSqlAuditEnableStatusResponse
   */
  async checkSqlAuditEnableStatus(request: CheckSqlAuditEnableStatusRequest): Promise<CheckSqlAuditEnableStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkSqlAuditEnableStatusWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDrdsDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDrdsDBResponse
   */
  async createDrdsDBWithOptions(request: CreateDrdsDBRequest, runtime: $dara.RuntimeOptions): Promise<CreateDrdsDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.dbInstanceIsCreating)) {
      query["DbInstanceIsCreating"] = request.dbInstanceIsCreating;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.encode)) {
      query["Encode"] = request.encode;
    }

    if (!$dara.isNull(request.instDbName)) {
      query["InstDbName"] = request.instDbName;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.rdsInstance)) {
      query["RdsInstance"] = request.rdsInstance;
    }

    if (!$dara.isNull(request.rdsSuperAccount)) {
      query["RdsSuperAccount"] = request.rdsSuperAccount;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDrdsDB",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDrdsDBResponse>(await this.callApi(params, req, runtime), new CreateDrdsDBResponse({}));
    } else {
      return $dara.cast<CreateDrdsDBResponse>(await this.execute(params, req, runtime), new CreateDrdsDBResponse({}));
    }

  }

  /**
   * @param request - CreateDrdsDBRequest
   * @returns CreateDrdsDBResponse
   */
  async createDrdsDB(request: CreateDrdsDBRequest): Promise<CreateDrdsDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDrdsDBWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDrdsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDrdsInstanceResponse
   */
  async createDrdsInstanceWithOptions(request: CreateDrdsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<CreateDrdsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceSeries)) {
      query["InstanceSeries"] = request.instanceSeries;
    }

    if (!$dara.isNull(request.isAutoRenew)) {
      query["IsAutoRenew"] = request.isAutoRenew;
    }

    if (!$dara.isNull(request.masterInstId)) {
      query["MasterInstId"] = request.masterInstId;
    }

    if (!$dara.isNull(request.mySQLVersion)) {
      query["MySQLVersion"] = request.mySQLVersion;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.isHa)) {
      query["isHa"] = request.isHa;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDrdsInstanceResponse>(await this.callApi(params, req, runtime), new CreateDrdsInstanceResponse({}));
    } else {
      return $dara.cast<CreateDrdsInstanceResponse>(await this.execute(params, req, runtime), new CreateDrdsInstanceResponse({}));
    }

  }

  /**
   * @param request - CreateDrdsInstanceRequest
   * @returns CreateDrdsInstanceResponse
   */
  async createDrdsInstance(request: CreateDrdsInstanceRequest): Promise<CreateDrdsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDrdsInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - CreateInstanceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceAccountResponse
   */
  async createInstanceAccountWithOptions(request: CreateInstanceAccountRequest, runtime: $dara.RuntimeOptions): Promise<CreateInstanceAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.dbPrivilege)) {
      query["DbPrivilege"] = request.dbPrivilege;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceAccount",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstanceAccountResponse>(await this.callApi(params, req, runtime), new CreateInstanceAccountResponse({}));
    } else {
      return $dara.cast<CreateInstanceAccountResponse>(await this.execute(params, req, runtime), new CreateInstanceAccountResponse({}));
    }

  }

  /**
   * @param request - CreateInstanceAccountRequest
   * @returns CreateInstanceAccountResponse
   */
  async createInstanceAccount(request: CreateInstanceAccountRequest): Promise<CreateInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceAccountWithOptions(request, runtime);
  }

  /**
   * @param request - CreateInstanceInternetAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceInternetAddressResponse
   */
  async createInstanceInternetAddressWithOptions(request: CreateInstanceInternetAddressRequest, runtime: $dara.RuntimeOptions): Promise<CreateInstanceInternetAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceInternetAddress",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstanceInternetAddressResponse>(await this.callApi(params, req, runtime), new CreateInstanceInternetAddressResponse({}));
    } else {
      return $dara.cast<CreateInstanceInternetAddressResponse>(await this.execute(params, req, runtime), new CreateInstanceInternetAddressResponse({}));
    }

  }

  /**
   * @param request - CreateInstanceInternetAddressRequest
   * @returns CreateInstanceInternetAddressResponse
   */
  async createInstanceInternetAddress(request: CreateInstanceInternetAddressRequest): Promise<CreateInstanceInternetAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceInternetAddressWithOptions(request, runtime);
  }

  /**
   * Creates an order to purchase an ApsaraDB RDS for MySQL instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of PolarDB-X 1.0. For more information, visit the [pricing page](https://www.aliyun.com/price/product#/rds/detail).
   * 
   * @param request - CreateOrderForRdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderForRdsResponse
   */
  async createOrderForRdsWithOptions(request: CreateOrderForRdsRequest, runtime: $dara.RuntimeOptions): Promise<CreateOrderForRdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrderForRds",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateOrderForRdsResponse>(await this.callApi(params, req, runtime), new CreateOrderForRdsResponse({}));
    } else {
      return $dara.cast<CreateOrderForRdsResponse>(await this.execute(params, req, runtime), new CreateOrderForRdsResponse({}));
    }

  }

  /**
   * Creates an order to purchase an ApsaraDB RDS for MySQL instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of PolarDB-X 1.0. For more information, visit the [pricing page](https://www.aliyun.com/price/product#/rds/detail).
   * 
   * @param request - CreateOrderForRdsRequest
   * @returns CreateOrderForRdsResponse
   */
  async createOrderForRds(request: CreateOrderForRdsRequest): Promise<CreateOrderForRdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrderForRdsWithOptions(request, runtime);
  }

  /**
   * @param request - CreateShardTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateShardTaskResponse
   */
  async createShardTaskWithOptions(request: CreateShardTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateShardTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceTableName)) {
      query["SourceTableName"] = request.sourceTableName;
    }

    if (!$dara.isNull(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateShardTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateShardTaskResponse>(await this.callApi(params, req, runtime), new CreateShardTaskResponse({}));
    } else {
      return $dara.cast<CreateShardTaskResponse>(await this.execute(params, req, runtime), new CreateShardTaskResponse({}));
    }

  }

  /**
   * @param request - CreateShardTaskRequest
   * @returns CreateShardTaskResponse
   */
  async createShardTask(request: CreateShardTaskRequest): Promise<CreateShardTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createShardTaskWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackMenuRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackMenuResponse
   */
  async describeBackMenuWithOptions(request: DescribeBackMenuRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBackMenuResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackMenu",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBackMenuResponse>(await this.callApi(params, req, runtime), new DescribeBackMenuResponse({}));
    } else {
      return $dara.cast<DescribeBackMenuResponse>(await this.execute(params, req, runtime), new DescribeBackMenuResponse({}));
    }

  }

  /**
   * @param request - DescribeBackMenuRequest
   * @returns DescribeBackMenuResponse
   */
  async describeBackMenu(request: DescribeBackMenuRequest): Promise<DescribeBackMenuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackMenuWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupDbsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupDbsResponse
   */
  async describeBackupDbsWithOptions(request: DescribeBackupDbsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBackupDbsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.preferredRestoreTime)) {
      query["PreferredRestoreTime"] = request.preferredRestoreTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupDbs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBackupDbsResponse>(await this.callApi(params, req, runtime), new DescribeBackupDbsResponse({}));
    } else {
      return $dara.cast<DescribeBackupDbsResponse>(await this.execute(params, req, runtime), new DescribeBackupDbsResponse({}));
    }

  }

  /**
   * @param request - DescribeBackupDbsRequest
   * @returns DescribeBackupDbsResponse
   */
  async describeBackupDbs(request: DescribeBackupDbsRequest): Promise<DescribeBackupDbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupDbsWithOptions(request, runtime);
  }

  /**
   * Queries the backup settings of local logs.
   * 
   * @param request - DescribeBackupLocalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupLocalResponse
   */
  async describeBackupLocalWithOptions(request: DescribeBackupLocalRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBackupLocalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupLocal",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBackupLocalResponse>(await this.callApi(params, req, runtime), new DescribeBackupLocalResponse({}));
    } else {
      return $dara.cast<DescribeBackupLocalResponse>(await this.execute(params, req, runtime), new DescribeBackupLocalResponse({}));
    }

  }

  /**
   * Queries the backup settings of local logs.
   * 
   * @param request - DescribeBackupLocalRequest
   * @returns DescribeBackupLocalResponse
   */
  async describeBackupLocal(request: DescribeBackupLocalRequest): Promise<DescribeBackupLocalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupLocalWithOptions(request, runtime);
  }

  /**
   * Queries the information about a backup policy.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPolicy",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBackupPolicyResponse>(await this.callApi(params, req, runtime), new DescribeBackupPolicyResponse({}));
    } else {
      return $dara.cast<DescribeBackupPolicyResponse>(await this.execute(params, req, runtime), new DescribeBackupPolicyResponse({}));
    }

  }

  /**
   * Queries the information about a backup policy.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupSetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupSetsResponse
   */
  async describeBackupSetsWithOptions(request: DescribeBackupSetsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBackupSetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupSets",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBackupSetsResponse>(await this.callApi(params, req, runtime), new DescribeBackupSetsResponse({}));
    } else {
      return $dara.cast<DescribeBackupSetsResponse>(await this.execute(params, req, runtime), new DescribeBackupSetsResponse({}));
    }

  }

  /**
   * @param request - DescribeBackupSetsRequest
   * @returns DescribeBackupSetsResponse
   */
  async describeBackupSets(request: DescribeBackupSetsRequest): Promise<DescribeBackupSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupSetsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupTimesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupTimesResponse
   */
  async describeBackupTimesWithOptions(request: DescribeBackupTimesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBackupTimesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupTimes",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBackupTimesResponse>(await this.callApi(params, req, runtime), new DescribeBackupTimesResponse({}));
    } else {
      return $dara.cast<DescribeBackupTimesResponse>(await this.execute(params, req, runtime), new DescribeBackupTimesResponse({}));
    }

  }

  /**
   * @param request - DescribeBackupTimesRequest
   * @returns DescribeBackupTimesResponse
   */
  async describeBackupTimes(request: DescribeBackupTimesRequest): Promise<DescribeBackupTimesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupTimesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBroadcastTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBroadcastTablesResponse
   */
  async describeBroadcastTablesWithOptions(request: DescribeBroadcastTablesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeBroadcastTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBroadcastTables",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBroadcastTablesResponse>(await this.callApi(params, req, runtime), new DescribeBroadcastTablesResponse({}));
    } else {
      return $dara.cast<DescribeBroadcastTablesResponse>(await this.execute(params, req, runtime), new DescribeBroadcastTablesResponse({}));
    }

  }

  /**
   * @param request - DescribeBroadcastTablesRequest
   * @returns DescribeBroadcastTablesResponse
   */
  async describeBroadcastTables(request: DescribeBroadcastTablesRequest): Promise<DescribeBroadcastTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBroadcastTablesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDbInstanceDbsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDbInstanceDbsResponse
   */
  async describeDbInstanceDbsWithOptions(request: DescribeDbInstanceDbsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDbInstanceDbsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDbInstanceDbs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDbInstanceDbsResponse>(await this.callApi(params, req, runtime), new DescribeDbInstanceDbsResponse({}));
    } else {
      return $dara.cast<DescribeDbInstanceDbsResponse>(await this.execute(params, req, runtime), new DescribeDbInstanceDbsResponse({}));
    }

  }

  /**
   * @param request - DescribeDbInstanceDbsRequest
   * @returns DescribeDbInstanceDbsResponse
   */
  async describeDbInstanceDbs(request: DescribeDbInstanceDbsRequest): Promise<DescribeDbInstanceDbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDbInstanceDbsWithOptions(request, runtime);
  }

  /**
   * Queries DescribeDbInstances of the storage layer, such as RDS or PolarDB.
   * 
   * @param request - DescribeDbInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDbInstancesResponse
   */
  async describeDbInstancesWithOptions(request: DescribeDbInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDbInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.search)) {
      query["Search"] = request.search;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDbInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDbInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDbInstancesResponse({}));
    } else {
      return $dara.cast<DescribeDbInstancesResponse>(await this.execute(params, req, runtime), new DescribeDbInstancesResponse({}));
    }

  }

  /**
   * Queries DescribeDbInstances of the storage layer, such as RDS or PolarDB.
   * 
   * @param request - DescribeDbInstancesRequest
   * @returns DescribeDbInstancesResponse
   */
  async describeDbInstances(request: DescribeDbInstancesRequest): Promise<DescribeDbInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDbInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDBResponse
   */
  async describeDrdsDBWithOptions(request: DescribeDrdsDBRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsDB",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsDBResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDBResponse({}));
    } else {
      return $dara.cast<DescribeDrdsDBResponse>(await this.execute(params, req, runtime), new DescribeDrdsDBResponse({}));
    }

  }

  /**
   * @param request - DescribeDrdsDBRequest
   * @returns DescribeDrdsDBResponse
   */
  async describeDrdsDB(request: DescribeDrdsDBRequest): Promise<DescribeDrdsDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDBWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the information of the PolarDB cluster in the DRDS logical database.
   * 
   * @param request - DescribeDrdsDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDBClusterResponse
   */
  async describeDrdsDBClusterWithOptions(request: DescribeDrdsDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsDBCluster",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsDBClusterResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDBClusterResponse({}));
    } else {
      return $dara.cast<DescribeDrdsDBClusterResponse>(await this.execute(params, req, runtime), new DescribeDrdsDBClusterResponse({}));
    }

  }

  /**
   * You can call this operation to query the information of the PolarDB cluster in the DRDS logical database.
   * 
   * @param request - DescribeDrdsDBClusterRequest
   * @returns DescribeDrdsDBClusterResponse
   */
  async describeDrdsDBCluster(request: DescribeDrdsDBClusterRequest): Promise<DescribeDrdsDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDBClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsDBIpWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDBIpWhiteListResponse
   */
  async describeDrdsDBIpWhiteListWithOptions(request: DescribeDrdsDBIpWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsDBIpWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsDBIpWhiteList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsDBIpWhiteListResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDBIpWhiteListResponse({}));
    } else {
      return $dara.cast<DescribeDrdsDBIpWhiteListResponse>(await this.execute(params, req, runtime), new DescribeDrdsDBIpWhiteListResponse({}));
    }

  }

  /**
   * @param request - DescribeDrdsDBIpWhiteListRequest
   * @returns DescribeDrdsDBIpWhiteListResponse
   */
  async describeDrdsDBIpWhiteList(request: DescribeDrdsDBIpWhiteListRequest): Promise<DescribeDrdsDBIpWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDBIpWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsDBsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDBsResponse
   */
  async describeDrdsDBsWithOptions(request: DescribeDrdsDBsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsDBsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsDBs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsDBsResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDBsResponse({}));
    } else {
      return $dara.cast<DescribeDrdsDBsResponse>(await this.execute(params, req, runtime), new DescribeDrdsDBsResponse({}));
    }

  }

  /**
   * @param request - DescribeDrdsDBsRequest
   * @returns DescribeDrdsDBsResponse
   */
  async describeDrdsDBs(request: DescribeDrdsDBsRequest): Promise<DescribeDrdsDBsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDBsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsDbInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDbInstanceResponse
   */
  async describeDrdsDbInstanceWithOptions(request: DescribeDrdsDbInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsDbInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsDbInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsDbInstanceResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDbInstanceResponse({}));
    } else {
      return $dara.cast<DescribeDrdsDbInstanceResponse>(await this.execute(params, req, runtime), new DescribeDrdsDbInstanceResponse({}));
    }

  }

  /**
   * @param request - DescribeDrdsDbInstanceRequest
   * @returns DescribeDrdsDbInstanceResponse
   */
  async describeDrdsDbInstance(request: DescribeDrdsDbInstanceRequest): Promise<DescribeDrdsDbInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDbInstanceWithOptions(request, runtime);
  }

  /**
   * Queries ApsaraDB RDS for MySQL instances that are used to store the data of a database.
   * 
   * @param request - DescribeDrdsDbInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDbInstancesResponse
   */
  async describeDrdsDbInstancesWithOptions(request: DescribeDrdsDbInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsDbInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "DescribeDrdsDbInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsDbInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDbInstancesResponse({}));
    } else {
      return $dara.cast<DescribeDrdsDbInstancesResponse>(await this.execute(params, req, runtime), new DescribeDrdsDbInstancesResponse({}));
    }

  }

  /**
   * Queries ApsaraDB RDS for MySQL instances that are used to store the data of a database.
   * 
   * @param request - DescribeDrdsDbInstancesRequest
   * @returns DescribeDrdsDbInstancesResponse
   */
  async describeDrdsDbInstances(request: DescribeDrdsDbInstancesRequest): Promise<DescribeDrdsDbInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDbInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsDbRdsNameListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDbRdsNameListResponse
   */
  async describeDrdsDbRdsNameListWithOptions(request: DescribeDrdsDbRdsNameListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsDbRdsNameListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsDbRdsNameList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsDbRdsNameListResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDbRdsNameListResponse({}));
    } else {
      return $dara.cast<DescribeDrdsDbRdsNameListResponse>(await this.execute(params, req, runtime), new DescribeDrdsDbRdsNameListResponse({}));
    }

  }

  /**
   * @param request - DescribeDrdsDbRdsNameListRequest
   * @returns DescribeDrdsDbRdsNameListResponse
   */
  async describeDrdsDbRdsNameList(request: DescribeDrdsDbRdsNameListRequest): Promise<DescribeDrdsDbRdsNameListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDbRdsNameListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstanceResponse
   */
  async describeDrdsInstanceWithOptions(request: DescribeDrdsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsInstanceResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceResponse({}));
    } else {
      return $dara.cast<DescribeDrdsInstanceResponse>(await this.execute(params, req, runtime), new DescribeDrdsInstanceResponse({}));
    }

  }

  /**
   * Queries the details of a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsInstanceRequest
   * @returns DescribeDrdsInstanceResponse
   */
  async describeDrdsInstance(request: DescribeDrdsInstanceRequest): Promise<DescribeDrdsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsInstanceDbMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstanceDbMonitorResponse
   */
  async describeDrdsInstanceDbMonitorWithOptions(request: DescribeDrdsInstanceDbMonitorRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsInstanceDbMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsInstanceDbMonitor",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsInstanceDbMonitorResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceDbMonitorResponse({}));
    } else {
      return $dara.cast<DescribeDrdsInstanceDbMonitorResponse>(await this.execute(params, req, runtime), new DescribeDrdsInstanceDbMonitorResponse({}));
    }

  }

  /**
   * @param request - DescribeDrdsInstanceDbMonitorRequest
   * @returns DescribeDrdsInstanceDbMonitorResponse
   */
  async describeDrdsInstanceDbMonitor(request: DescribeDrdsInstanceDbMonitorRequest): Promise<DescribeDrdsInstanceDbMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstanceDbMonitorWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsInstanceLevelTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstanceLevelTasksResponse
   */
  async describeDrdsInstanceLevelTasksWithOptions(request: DescribeDrdsInstanceLevelTasksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsInstanceLevelTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsInstanceLevelTasks",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsInstanceLevelTasksResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceLevelTasksResponse({}));
    } else {
      return $dara.cast<DescribeDrdsInstanceLevelTasksResponse>(await this.execute(params, req, runtime), new DescribeDrdsInstanceLevelTasksResponse({}));
    }

  }

  /**
   * @param request - DescribeDrdsInstanceLevelTasksRequest
   * @returns DescribeDrdsInstanceLevelTasksResponse
   */
  async describeDrdsInstanceLevelTasks(request: DescribeDrdsInstanceLevelTasksRequest): Promise<DescribeDrdsInstanceLevelTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstanceLevelTasksWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsInstanceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstanceMonitorResponse
   */
  async describeDrdsInstanceMonitorWithOptions(request: DescribeDrdsInstanceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsInstanceMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.periodMultiple)) {
      query["PeriodMultiple"] = request.periodMultiple;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsInstanceMonitor",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsInstanceMonitorResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceMonitorResponse({}));
    } else {
      return $dara.cast<DescribeDrdsInstanceMonitorResponse>(await this.execute(params, req, runtime), new DescribeDrdsInstanceMonitorResponse({}));
    }

  }

  /**
   * @param request - DescribeDrdsInstanceMonitorRequest
   * @returns DescribeDrdsInstanceMonitorResponse
   */
  async describeDrdsInstanceMonitor(request: DescribeDrdsInstanceMonitorRequest): Promise<DescribeDrdsInstanceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsInstanceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstanceVersionResponse
   */
  async describeDrdsInstanceVersionWithOptions(request: DescribeDrdsInstanceVersionRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsInstanceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsInstanceVersion",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsInstanceVersionResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceVersionResponse({}));
    } else {
      return $dara.cast<DescribeDrdsInstanceVersionResponse>(await this.execute(params, req, runtime), new DescribeDrdsInstanceVersionResponse({}));
    }

  }

  /**
   * @param request - DescribeDrdsInstanceVersionRequest
   * @returns DescribeDrdsInstanceVersionResponse
   */
  async describeDrdsInstanceVersion(request: DescribeDrdsInstanceVersionRequest): Promise<DescribeDrdsInstanceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstanceVersionWithOptions(request, runtime);
  }

  /**
   * Queries instances that meet the specified conditions.
   * 
   * @param request - DescribeDrdsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstancesResponse
   */
  async describeDrdsInstancesWithOptions(request: DescribeDrdsInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.expired)) {
      query["Expired"] = request.expired;
    }

    if (!$dara.isNull(request.mix)) {
      query["Mix"] = request.mix;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productVersion)) {
      query["ProductVersion"] = request.productVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstancesResponse({}));
    } else {
      return $dara.cast<DescribeDrdsInstancesResponse>(await this.execute(params, req, runtime), new DescribeDrdsInstancesResponse({}));
    }

  }

  /**
   * Queries instances that meet the specified conditions.
   * 
   * @param request - DescribeDrdsInstancesRequest
   * @returns DescribeDrdsInstancesResponse
   */
  async describeDrdsInstances(request: DescribeDrdsInstancesRequest): Promise<DescribeDrdsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsParamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsParamsResponse
   */
  async describeDrdsParamsWithOptions(request: DescribeDrdsParamsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsParamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.paramLevel)) {
      query["ParamLevel"] = request.paramLevel;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsParams",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsParamsResponse>(await this.callApi(params, req, runtime), new DescribeDrdsParamsResponse({}));
    } else {
      return $dara.cast<DescribeDrdsParamsResponse>(await this.execute(params, req, runtime), new DescribeDrdsParamsResponse({}));
    }

  }

  /**
   * @param request - DescribeDrdsParamsRequest
   * @returns DescribeDrdsParamsResponse
   */
  async describeDrdsParams(request: DescribeDrdsParamsRequest): Promise<DescribeDrdsParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsParamsWithOptions(request, runtime);
  }

  /**
   * Queries the information about all custom ApsaraDB RDS for MySQL instances in a PolarDB-X instance.
   * 
   * @param request - DescribeDrdsRdsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsRdsInstancesResponse
   */
  async describeDrdsRdsInstancesWithOptions(request: DescribeDrdsRdsInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsRdsInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsRdsInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsRdsInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDrdsRdsInstancesResponse({}));
    } else {
      return $dara.cast<DescribeDrdsRdsInstancesResponse>(await this.execute(params, req, runtime), new DescribeDrdsRdsInstancesResponse({}));
    }

  }

  /**
   * Queries the information about all custom ApsaraDB RDS for MySQL instances in a PolarDB-X instance.
   * 
   * @param request - DescribeDrdsRdsInstancesRequest
   * @returns DescribeDrdsRdsInstancesResponse
   */
  async describeDrdsRdsInstances(request: DescribeDrdsRdsInstancesRequest): Promise<DescribeDrdsRdsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsRdsInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the database shards of an PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsShardingDbsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsShardingDbsResponse
   */
  async describeDrdsShardingDbsWithOptions(request: DescribeDrdsShardingDbsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsShardingDbsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dbNamePattern)) {
      query["DbNamePattern"] = request.dbNamePattern;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "DescribeDrdsShardingDbs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsShardingDbsResponse>(await this.callApi(params, req, runtime), new DescribeDrdsShardingDbsResponse({}));
    } else {
      return $dara.cast<DescribeDrdsShardingDbsResponse>(await this.execute(params, req, runtime), new DescribeDrdsShardingDbsResponse({}));
    }

  }

  /**
   * Queries the database shards of an PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsShardingDbsRequest
   * @returns DescribeDrdsShardingDbsResponse
   */
  async describeDrdsShardingDbs(request: DescribeDrdsShardingDbsRequest): Promise<DescribeDrdsShardingDbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsShardingDbsWithOptions(request, runtime);
  }

  /**
   * Queries a slow SQL query.
   * 
   * @param request - DescribeDrdsSlowSqlsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsSlowSqlsResponse
   */
  async describeDrdsSlowSqlsWithOptions(request: DescribeDrdsSlowSqlsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsSlowSqlsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.exeTime)) {
      query["ExeTime"] = request.exeTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsSlowSqls",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsSlowSqlsResponse>(await this.callApi(params, req, runtime), new DescribeDrdsSlowSqlsResponse({}));
    } else {
      return $dara.cast<DescribeDrdsSlowSqlsResponse>(await this.execute(params, req, runtime), new DescribeDrdsSlowSqlsResponse({}));
    }

  }

  /**
   * Queries a slow SQL query.
   * 
   * @param request - DescribeDrdsSlowSqlsRequest
   * @returns DescribeDrdsSlowSqlsResponse
   */
  async describeDrdsSlowSqls(request: DescribeDrdsSlowSqlsRequest): Promise<DescribeDrdsSlowSqlsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsSlowSqlsWithOptions(request, runtime);
  }

  /**
   * Queries the SQL audit details of a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsSqlAuditStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsSqlAuditStatusResponse
   */
  async describeDrdsSqlAuditStatusWithOptions(request: DescribeDrdsSqlAuditStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsSqlAuditStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsSqlAuditStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsSqlAuditStatusResponse>(await this.callApi(params, req, runtime), new DescribeDrdsSqlAuditStatusResponse({}));
    } else {
      return $dara.cast<DescribeDrdsSqlAuditStatusResponse>(await this.execute(params, req, runtime), new DescribeDrdsSqlAuditStatusResponse({}));
    }

  }

  /**
   * Queries the SQL audit details of a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsSqlAuditStatusRequest
   * @returns DescribeDrdsSqlAuditStatusResponse
   */
  async describeDrdsSqlAuditStatus(request: DescribeDrdsSqlAuditStatusRequest): Promise<DescribeDrdsSqlAuditStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsSqlAuditStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsTasksResponse
   */
  async describeDrdsTasksWithOptions(request: DescribeDrdsTasksRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDrdsTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsTasks",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDrdsTasksResponse>(await this.callApi(params, req, runtime), new DescribeDrdsTasksResponse({}));
    } else {
      return $dara.cast<DescribeDrdsTasksResponse>(await this.execute(params, req, runtime), new DescribeDrdsTasksResponse({}));
    }

  }

  /**
   * @param request - DescribeDrdsTasksRequest
   * @returns DescribeDrdsTasksResponse
   */
  async describeDrdsTasks(request: DescribeDrdsTasksRequest): Promise<DescribeDrdsTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsTasksWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeExpandLogicTableInfoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpandLogicTableInfoListResponse
   */
  async describeExpandLogicTableInfoListWithOptions(request: DescribeExpandLogicTableInfoListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeExpandLogicTableInfoListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpandLogicTableInfoList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeExpandLogicTableInfoListResponse>(await this.callApi(params, req, runtime), new DescribeExpandLogicTableInfoListResponse({}));
    } else {
      return $dara.cast<DescribeExpandLogicTableInfoListResponse>(await this.execute(params, req, runtime), new DescribeExpandLogicTableInfoListResponse({}));
    }

  }

  /**
   * @param request - DescribeExpandLogicTableInfoListRequest
   * @returns DescribeExpandLogicTableInfoListResponse
   */
  async describeExpandLogicTableInfoList(request: DescribeExpandLogicTableInfoListRequest): Promise<DescribeExpandLogicTableInfoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpandLogicTableInfoListWithOptions(request, runtime);
  }

  /**
   * Queries the information about databases on which hots-pot scale-out is performed.
   * 
   * @param request - DescribeHotDbListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHotDbListResponse
   */
  async describeHotDbListWithOptions(request: DescribeHotDbListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeHotDbListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHotDbList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeHotDbListResponse>(await this.callApi(params, req, runtime), new DescribeHotDbListResponse({}));
    } else {
      return $dara.cast<DescribeHotDbListResponse>(await this.execute(params, req, runtime), new DescribeHotDbListResponse({}));
    }

  }

  /**
   * Queries the information about databases on which hots-pot scale-out is performed.
   * 
   * @param request - DescribeHotDbListRequest
   * @returns DescribeHotDbListResponse
   */
  async describeHotDbList(request: DescribeHotDbListRequest): Promise<DescribeHotDbListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHotDbListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstDbLogInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstDbLogInfoResponse
   */
  async describeInstDbLogInfoWithOptions(request: DescribeInstDbLogInfoRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstDbLogInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstDbLogInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstDbLogInfoResponse>(await this.callApi(params, req, runtime), new DescribeInstDbLogInfoResponse({}));
    } else {
      return $dara.cast<DescribeInstDbLogInfoResponse>(await this.execute(params, req, runtime), new DescribeInstDbLogInfoResponse({}));
    }

  }

  /**
   * @param request - DescribeInstDbLogInfoRequest
   * @returns DescribeInstDbLogInfoResponse
   */
  async describeInstDbLogInfo(request: DescribeInstDbLogInfoRequest): Promise<DescribeInstDbLogInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstDbLogInfoWithOptions(request, runtime);
  }

  /**
   * Queries the names of the Log Service project and the Logstore used by the SQL audit feature.
   * 
   * @param request - DescribeInstDbSlsInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstDbSlsInfoResponse
   */
  async describeInstDbSlsInfoWithOptions(request: DescribeInstDbSlsInfoRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstDbSlsInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstDbSlsInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstDbSlsInfoResponse>(await this.callApi(params, req, runtime), new DescribeInstDbSlsInfoResponse({}));
    } else {
      return $dara.cast<DescribeInstDbSlsInfoResponse>(await this.execute(params, req, runtime), new DescribeInstDbSlsInfoResponse({}));
    }

  }

  /**
   * Queries the names of the Log Service project and the Logstore used by the SQL audit feature.
   * 
   * @param request - DescribeInstDbSlsInfoRequest
   * @returns DescribeInstDbSlsInfoResponse
   */
  async describeInstDbSlsInfo(request: DescribeInstDbSlsInfoRequest): Promise<DescribeInstDbSlsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstDbSlsInfoWithOptions(request, runtime);
  }

  /**
   * Queries information about an instance account.
   * 
   * @param request - DescribeInstanceAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAccountsResponse
   */
  async describeInstanceAccountsWithOptions(request: DescribeInstanceAccountsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAccounts",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceAccountsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceAccountsResponse({}));
    } else {
      return $dara.cast<DescribeInstanceAccountsResponse>(await this.execute(params, req, runtime), new DescribeInstanceAccountsResponse({}));
    }

  }

  /**
   * Queries information about an instance account.
   * 
   * @param request - DescribeInstanceAccountsRequest
   * @returns DescribeInstanceAccountsResponse
   */
  async describeInstanceAccounts(request: DescribeInstanceAccountsRequest): Promise<DescribeInstanceAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAccountsWithOptions(request, runtime);
  }

  /**
   * Check whether zone switching is enabled
   * 
   * @param request - DescribeInstanceSwitchAzoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSwitchAzoneResponse
   */
  async describeInstanceSwitchAzoneWithOptions(request: DescribeInstanceSwitchAzoneRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceSwitchAzoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSwitchAzone",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceSwitchAzoneResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSwitchAzoneResponse({}));
    } else {
      return $dara.cast<DescribeInstanceSwitchAzoneResponse>(await this.execute(params, req, runtime), new DescribeInstanceSwitchAzoneResponse({}));
    }

  }

  /**
   * Check whether zone switching is enabled
   * 
   * @param request - DescribeInstanceSwitchAzoneRequest
   * @returns DescribeInstanceSwitchAzoneResponse
   */
  async describeInstanceSwitchAzone(request: DescribeInstanceSwitchAzoneRequest): Promise<DescribeInstanceSwitchAzoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSwitchAzoneWithOptions(request, runtime);
  }

  /**
   * Queries whether you can change the network type of a PolarDB-X 1.0 instance.
   * 
   * @remarks
   * ***
   * 
   * @param request - DescribeInstanceSwitchNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSwitchNetworkResponse
   */
  async describeInstanceSwitchNetworkWithOptions(request: DescribeInstanceSwitchNetworkRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceSwitchNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSwitchNetwork",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceSwitchNetworkResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSwitchNetworkResponse({}));
    } else {
      return $dara.cast<DescribeInstanceSwitchNetworkResponse>(await this.execute(params, req, runtime), new DescribeInstanceSwitchNetworkResponse({}));
    }

  }

  /**
   * Queries whether you can change the network type of a PolarDB-X 1.0 instance.
   * 
   * @remarks
   * ***
   * 
   * @param request - DescribeInstanceSwitchNetworkRequest
   * @returns DescribeInstanceSwitchNetworkResponse
   */
  async describeInstanceSwitchNetwork(request: DescribeInstanceSwitchNetworkRequest): Promise<DescribeInstanceSwitchNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSwitchNetworkWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePreCheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePreCheckResultResponse
   */
  async describePreCheckResultWithOptions(request: DescribePreCheckResultRequest, runtime: $dara.RuntimeOptions): Promise<DescribePreCheckResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePreCheckResult",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePreCheckResultResponse>(await this.callApi(params, req, runtime), new DescribePreCheckResultResponse({}));
    } else {
      return $dara.cast<DescribePreCheckResultResponse>(await this.execute(params, req, runtime), new DescribePreCheckResultResponse({}));
    }

  }

  /**
   * @param request - DescribePreCheckResultRequest
   * @returns DescribePreCheckResultResponse
   */
  async describePreCheckResult(request: DescribePreCheckResultRequest): Promise<DescribePreCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePreCheckResultWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRDSPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRDSPerformanceResponse
   */
  async describeRDSPerformanceWithOptions(request: DescribeRDSPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRDSPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keys)) {
      query["Keys"] = request.keys;
    }

    if (!$dara.isNull(request.rdsInstanceId)) {
      query["RdsInstanceId"] = request.rdsInstanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRDSPerformance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRDSPerformanceResponse>(await this.callApi(params, req, runtime), new DescribeRDSPerformanceResponse({}));
    } else {
      return $dara.cast<DescribeRDSPerformanceResponse>(await this.execute(params, req, runtime), new DescribeRDSPerformanceResponse({}));
    }

  }

  /**
   * @param request - DescribeRDSPerformanceRequest
   * @returns DescribeRDSPerformanceResponse
   */
  async describeRDSPerformance(request: DescribeRDSPerformanceRequest): Promise<DescribeRDSPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRDSPerformanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRdsCommodityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdsCommodityResponse
   */
  async describeRdsCommodityWithOptions(request: DescribeRdsCommodityRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRdsCommodityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdsCommodity",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRdsCommodityResponse>(await this.callApi(params, req, runtime), new DescribeRdsCommodityResponse({}));
    } else {
      return $dara.cast<DescribeRdsCommodityResponse>(await this.execute(params, req, runtime), new DescribeRdsCommodityResponse({}));
    }

  }

  /**
   * @param request - DescribeRdsCommodityRequest
   * @returns DescribeRdsCommodityResponse
   */
  async describeRdsCommodity(request: DescribeRdsCommodityRequest): Promise<DescribeRdsCommodityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdsCommodityWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRdsPerformanceSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdsPerformanceSummaryResponse
   */
  async describeRdsPerformanceSummaryWithOptions(request: DescribeRdsPerformanceSummaryRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRdsPerformanceSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.rdsInstanceId)) {
      query["RdsInstanceId"] = request.rdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdsPerformanceSummary",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRdsPerformanceSummaryResponse>(await this.callApi(params, req, runtime), new DescribeRdsPerformanceSummaryResponse({}));
    } else {
      return $dara.cast<DescribeRdsPerformanceSummaryResponse>(await this.execute(params, req, runtime), new DescribeRdsPerformanceSummaryResponse({}));
    }

  }

  /**
   * @param request - DescribeRdsPerformanceSummaryRequest
   * @returns DescribeRdsPerformanceSummaryResponse
   */
  async describeRdsPerformanceSummary(request: DescribeRdsPerformanceSummaryRequest): Promise<DescribeRdsPerformanceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdsPerformanceSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRdsSuperAccountInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdsSuperAccountInstancesResponse
   */
  async describeRdsSuperAccountInstancesWithOptions(request: DescribeRdsSuperAccountInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRdsSuperAccountInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.rdsInstance)) {
      query["RdsInstance"] = request.rdsInstance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdsSuperAccountInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRdsSuperAccountInstancesResponse>(await this.callApi(params, req, runtime), new DescribeRdsSuperAccountInstancesResponse({}));
    } else {
      return $dara.cast<DescribeRdsSuperAccountInstancesResponse>(await this.execute(params, req, runtime), new DescribeRdsSuperAccountInstancesResponse({}));
    }

  }

  /**
   * @param request - DescribeRdsSuperAccountInstancesRequest
   * @returns DescribeRdsSuperAccountInstancesResponse
   */
  async describeRdsSuperAccountInstances(request: DescribeRdsSuperAccountInstancesRequest): Promise<DescribeRdsSuperAccountInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdsSuperAccountInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the status of the table recycle bin.
   * 
   * @param request - DescribeRecycleBinStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecycleBinStatusResponse
   */
  async describeRecycleBinStatusWithOptions(request: DescribeRecycleBinStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRecycleBinStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecycleBinStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRecycleBinStatusResponse>(await this.callApi(params, req, runtime), new DescribeRecycleBinStatusResponse({}));
    } else {
      return $dara.cast<DescribeRecycleBinStatusResponse>(await this.execute(params, req, runtime), new DescribeRecycleBinStatusResponse({}));
    }

  }

  /**
   * Queries the status of the table recycle bin.
   * 
   * @param request - DescribeRecycleBinStatusRequest
   * @returns DescribeRecycleBinStatusResponse
   */
  async describeRecycleBinStatus(request: DescribeRecycleBinStatusRequest): Promise<DescribeRecycleBinStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecycleBinStatusWithOptions(request, runtime);
  }

  /**
   * Queries the tables that can be restored in the recycle bin.
   * 
   * @param request - DescribeRecycleBinTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecycleBinTablesResponse
   */
  async describeRecycleBinTablesWithOptions(request: DescribeRecycleBinTablesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRecycleBinTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecycleBinTables",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRecycleBinTablesResponse>(await this.callApi(params, req, runtime), new DescribeRecycleBinTablesResponse({}));
    } else {
      return $dara.cast<DescribeRecycleBinTablesResponse>(await this.execute(params, req, runtime), new DescribeRecycleBinTablesResponse({}));
    }

  }

  /**
   * Queries the tables that can be restored in the recycle bin.
   * 
   * @param request - DescribeRecycleBinTablesRequest
   * @returns DescribeRecycleBinTablesResponse
   */
  async describeRecycleBinTables(request: DescribeRecycleBinTablesRequest): Promise<DescribeRecycleBinTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecycleBinTablesWithOptions(request, runtime);
  }

  /**
   * You can call the DescribeRestoreOrder operation to view the details of the order.
   * 
   * @param request - DescribeRestoreOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreOrderResponse
   */
  async describeRestoreOrderWithOptions(request: DescribeRestoreOrderRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRestoreOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRestoreOrder",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRestoreOrderResponse>(await this.callApi(params, req, runtime), new DescribeRestoreOrderResponse({}));
    } else {
      return $dara.cast<DescribeRestoreOrderResponse>(await this.execute(params, req, runtime), new DescribeRestoreOrderResponse({}));
    }

  }

  /**
   * You can call the DescribeRestoreOrder operation to view the details of the order.
   * 
   * @param request - DescribeRestoreOrderRequest
   * @returns DescribeRestoreOrderResponse
   */
  async describeRestoreOrder(request: DescribeRestoreOrderRequest): Promise<DescribeRestoreOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreOrderWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeShardTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeShardTaskInfoResponse
   */
  async describeShardTaskInfoWithOptions(request: DescribeShardTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<DescribeShardTaskInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceTableName)) {
      query["SourceTableName"] = request.sourceTableName;
    }

    if (!$dara.isNull(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeShardTaskInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeShardTaskInfoResponse>(await this.callApi(params, req, runtime), new DescribeShardTaskInfoResponse({}));
    } else {
      return $dara.cast<DescribeShardTaskInfoResponse>(await this.execute(params, req, runtime), new DescribeShardTaskInfoResponse({}));
    }

  }

  /**
   * @param request - DescribeShardTaskInfoRequest
   * @returns DescribeShardTaskInfoResponse
   */
  async describeShardTaskInfo(request: DescribeShardTaskInfoRequest): Promise<DescribeShardTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeShardTaskInfoWithOptions(request, runtime);
  }

  /**
   * Queries the flashback tasks that are performed on a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeSqlFlashbakTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlFlashbakTaskResponse
   */
  async describeSqlFlashbakTaskWithOptions(request: DescribeSqlFlashbakTaskRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSqlFlashbakTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSqlFlashbakTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSqlFlashbakTaskResponse>(await this.callApi(params, req, runtime), new DescribeSqlFlashbakTaskResponse({}));
    } else {
      return $dara.cast<DescribeSqlFlashbakTaskResponse>(await this.execute(params, req, runtime), new DescribeSqlFlashbakTaskResponse({}));
    }

  }

  /**
   * Queries the flashback tasks that are performed on a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeSqlFlashbakTaskRequest
   * @returns DescribeSqlFlashbakTaskResponse
   */
  async describeSqlFlashbakTask(request: DescribeSqlFlashbakTaskRequest): Promise<DescribeSqlFlashbakTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlFlashbakTaskWithOptions(request, runtime);
  }

  /**
   * Queries information about the schema of a table.
   * 
   * @param request - DescribeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableResponse
   */
  async describeTableWithOptions(request: DescribeTableRequest, runtime: $dara.RuntimeOptions): Promise<DescribeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeTableResponse>(await this.callApi(params, req, runtime), new DescribeTableResponse({}));
    } else {
      return $dara.cast<DescribeTableResponse>(await this.execute(params, req, runtime), new DescribeTableResponse({}));
    }

  }

  /**
   * Queries information about the schema of a table.
   * 
   * @param request - DescribeTableRequest
   * @returns DescribeTableResponse
   */
  async describeTable(request: DescribeTableRequest): Promise<DescribeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTableListByTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableListByTypeResponse
   */
  async describeTableListByTypeWithOptions(request: DescribeTableListByTypeRequest, runtime: $dara.RuntimeOptions): Promise<DescribeTableListByTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTableListByType",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeTableListByTypeResponse>(await this.callApi(params, req, runtime), new DescribeTableListByTypeResponse({}));
    } else {
      return $dara.cast<DescribeTableListByTypeResponse>(await this.execute(params, req, runtime), new DescribeTableListByTypeResponse({}));
    }

  }

  /**
   * @param request - DescribeTableListByTypeRequest
   * @returns DescribeTableListByTypeResponse
   */
  async describeTableListByType(request: DescribeTableListByTypeRequest): Promise<DescribeTableListByTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableListByTypeWithOptions(request, runtime);
  }

  /**
   * DescribeTables文档变更
   * 
   * @param request - DescribeTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTablesResponse
   */
  async describeTablesWithOptions(request: DescribeTablesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTables",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeTablesResponse>(await this.callApi(params, req, runtime), new DescribeTablesResponse({}));
    } else {
      return $dara.cast<DescribeTablesResponse>(await this.execute(params, req, runtime), new DescribeTablesResponse({}));
    }

  }

  /**
   * DescribeTables文档变更
   * 
   * @param request - DescribeTablesRequest
   * @returns DescribeTablesResponse
   */
  async describeTables(request: DescribeTablesRequest): Promise<DescribeTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * Disables the SQL audit feature for a database.
   * 
   * @param request - DisableSqlAuditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSqlAuditResponse
   */
  async disableSqlAuditWithOptions(request: DisableSqlAuditRequest, runtime: $dara.RuntimeOptions): Promise<DisableSqlAuditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSqlAudit",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableSqlAuditResponse>(await this.callApi(params, req, runtime), new DisableSqlAuditResponse({}));
    } else {
      return $dara.cast<DisableSqlAuditResponse>(await this.execute(params, req, runtime), new DisableSqlAuditResponse({}));
    }

  }

  /**
   * Disables the SQL audit feature for a database.
   * 
   * @param request - DisableSqlAuditRequest
   * @returns DisableSqlAuditResponse
   */
  async disableSqlAudit(request: DisableSqlAuditRequest): Promise<DisableSqlAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSqlAuditWithOptions(request, runtime);
  }

  /**
   * Creates an IPv6 address.
   * 
   * @param request - EnableInstanceIpv6AddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInstanceIpv6AddressResponse
   */
  async enableInstanceIpv6AddressWithOptions(request: EnableInstanceIpv6AddressRequest, runtime: $dara.RuntimeOptions): Promise<EnableInstanceIpv6AddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableInstanceIpv6Address",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableInstanceIpv6AddressResponse>(await this.callApi(params, req, runtime), new EnableInstanceIpv6AddressResponse({}));
    } else {
      return $dara.cast<EnableInstanceIpv6AddressResponse>(await this.execute(params, req, runtime), new EnableInstanceIpv6AddressResponse({}));
    }

  }

  /**
   * Creates an IPv6 address.
   * 
   * @param request - EnableInstanceIpv6AddressRequest
   * @returns EnableInstanceIpv6AddressResponse
   */
  async enableInstanceIpv6Address(request: EnableInstanceIpv6AddressRequest): Promise<EnableInstanceIpv6AddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableInstanceIpv6AddressWithOptions(request, runtime);
  }

  /**
   * Enables the SQL audit feature for a database.
   * 
   * @param request - EnableSqlAuditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSqlAuditResponse
   */
  async enableSqlAuditWithOptions(request: EnableSqlAuditRequest, runtime: $dara.RuntimeOptions): Promise<EnableSqlAuditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.isRecall)) {
      query["IsRecall"] = request.isRecall;
    }

    if (!$dara.isNull(request.recallEndTimestamp)) {
      query["RecallEndTimestamp"] = request.recallEndTimestamp;
    }

    if (!$dara.isNull(request.recallStartTimestamp)) {
      query["RecallStartTimestamp"] = request.recallStartTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSqlAudit",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableSqlAuditResponse>(await this.callApi(params, req, runtime), new EnableSqlAuditResponse({}));
    } else {
      return $dara.cast<EnableSqlAuditResponse>(await this.execute(params, req, runtime), new EnableSqlAuditResponse({}));
    }

  }

  /**
   * Enables the SQL audit feature for a database.
   * 
   * @param request - EnableSqlAuditRequest
   * @returns EnableSqlAuditResponse
   */
  async enableSqlAudit(request: EnableSqlAuditRequest): Promise<EnableSqlAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSqlAuditWithOptions(request, runtime);
  }

  /**
   * @param request - EnableSqlFlashbackMatchSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSqlFlashbackMatchSwitchResponse
   */
  async enableSqlFlashbackMatchSwitchWithOptions(request: EnableSqlFlashbackMatchSwitchRequest, runtime: $dara.RuntimeOptions): Promise<EnableSqlFlashbackMatchSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSqlFlashbackMatchSwitch",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableSqlFlashbackMatchSwitchResponse>(await this.callApi(params, req, runtime), new EnableSqlFlashbackMatchSwitchResponse({}));
    } else {
      return $dara.cast<EnableSqlFlashbackMatchSwitchResponse>(await this.execute(params, req, runtime), new EnableSqlFlashbackMatchSwitchResponse({}));
    }

  }

  /**
   * @param request - EnableSqlFlashbackMatchSwitchRequest
   * @returns EnableSqlFlashbackMatchSwitchResponse
   */
  async enableSqlFlashbackMatchSwitch(request: EnableSqlFlashbackMatchSwitchRequest): Promise<EnableSqlFlashbackMatchSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSqlFlashbackMatchSwitchWithOptions(request, runtime);
  }

  /**
   * Restores a logical table that is deleted.
   * 
   * @param request - FlashbackRecycleBinTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlashbackRecycleBinTableResponse
   */
  async flashbackRecycleBinTableWithOptions(request: FlashbackRecycleBinTableRequest, runtime: $dara.RuntimeOptions): Promise<FlashbackRecycleBinTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlashbackRecycleBinTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<FlashbackRecycleBinTableResponse>(await this.callApi(params, req, runtime), new FlashbackRecycleBinTableResponse({}));
    } else {
      return $dara.cast<FlashbackRecycleBinTableResponse>(await this.execute(params, req, runtime), new FlashbackRecycleBinTableResponse({}));
    }

  }

  /**
   * Restores a logical table that is deleted.
   * 
   * @param request - FlashbackRecycleBinTableRequest
   * @returns FlashbackRecycleBinTableResponse
   */
  async flashbackRecycleBinTable(request: FlashbackRecycleBinTableRequest): Promise<FlashbackRecycleBinTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.flashbackRecycleBinTableWithOptions(request, runtime);
  }

  /**
   * @param request - GetDrdsDbRdsRelationInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDrdsDbRdsRelationInfoResponse
   */
  async getDrdsDbRdsRelationInfoWithOptions(request: GetDrdsDbRdsRelationInfoRequest, runtime: $dara.RuntimeOptions): Promise<GetDrdsDbRdsRelationInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDrdsDbRdsRelationInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDrdsDbRdsRelationInfoResponse>(await this.callApi(params, req, runtime), new GetDrdsDbRdsRelationInfoResponse({}));
    } else {
      return $dara.cast<GetDrdsDbRdsRelationInfoResponse>(await this.execute(params, req, runtime), new GetDrdsDbRdsRelationInfoResponse({}));
    }

  }

  /**
   * @param request - GetDrdsDbRdsRelationInfoRequest
   * @returns GetDrdsDbRdsRelationInfoResponse
   */
  async getDrdsDbRdsRelationInfo(request: GetDrdsDbRdsRelationInfoRequest): Promise<GetDrdsDbRdsRelationInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDrdsDbRdsRelationInfoWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Manages a custom ApsaraDB RDS instance at the storage layer.
   * 
   * @param request - ManagePrivateRdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManagePrivateRdsResponse
   */
  async managePrivateRdsWithOptions(request: ManagePrivateRdsRequest, runtime: $dara.RuntimeOptions): Promise<ManagePrivateRdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.rdsAction)) {
      query["RdsAction"] = request.rdsAction;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManagePrivateRds",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ManagePrivateRdsResponse>(await this.callApi(params, req, runtime), new ManagePrivateRdsResponse({}));
    } else {
      return $dara.cast<ManagePrivateRdsResponse>(await this.execute(params, req, runtime), new ManagePrivateRdsResponse({}));
    }

  }

  /**
   * Manages a custom ApsaraDB RDS instance at the storage layer.
   * 
   * @param request - ManagePrivateRdsRequest
   * @returns ManagePrivateRdsResponse
   */
  async managePrivateRds(request: ManagePrivateRdsRequest): Promise<ManagePrivateRdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.managePrivateRdsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyAccountDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescriptionWithOptions(request: ModifyAccountDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAccountDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountDescription",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAccountDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyAccountDescriptionResponse({}));
    } else {
      return $dara.cast<ModifyAccountDescriptionResponse>(await this.execute(params, req, runtime), new ModifyAccountDescriptionResponse({}));
    }

  }

  /**
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyAccountPrivilegeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountPrivilegeResponse
   */
  async modifyAccountPrivilegeWithOptions(request: ModifyAccountPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<ModifyAccountPrivilegeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.dbPrivilege)) {
      query["DbPrivilege"] = request.dbPrivilege;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountPrivilege",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyAccountPrivilegeResponse>(await this.callApi(params, req, runtime), new ModifyAccountPrivilegeResponse({}));
    } else {
      return $dara.cast<ModifyAccountPrivilegeResponse>(await this.execute(params, req, runtime), new ModifyAccountPrivilegeResponse({}));
    }

  }

  /**
   * @param request - ModifyAccountPrivilegeRequest
   * @returns ModifyAccountPrivilegeResponse
   */
  async modifyAccountPrivilege(request: ModifyAccountPrivilegeRequest): Promise<ModifyAccountPrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDrdsInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDrdsInstanceDescriptionResponse
   */
  async modifyDrdsInstanceDescriptionWithOptions(request: ModifyDrdsInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDrdsInstanceDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDrdsInstanceDescription",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDrdsInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDrdsInstanceDescriptionResponse({}));
    } else {
      return $dara.cast<ModifyDrdsInstanceDescriptionResponse>(await this.execute(params, req, runtime), new ModifyDrdsInstanceDescriptionResponse({}));
    }

  }

  /**
   * @param request - ModifyDrdsInstanceDescriptionRequest
   * @returns ModifyDrdsInstanceDescriptionResponse
   */
  async modifyDrdsInstanceDescription(request: ModifyDrdsInstanceDescriptionRequest): Promise<ModifyDrdsInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDrdsInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDrdsIpWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDrdsIpWhiteListResponse
   */
  async modifyDrdsIpWhiteListWithOptions(request: ModifyDrdsIpWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDrdsIpWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.groupAttribute)) {
      query["GroupAttribute"] = request.groupAttribute;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ipWhiteList)) {
      query["IpWhiteList"] = request.ipWhiteList;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDrdsIpWhiteList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDrdsIpWhiteListResponse>(await this.callApi(params, req, runtime), new ModifyDrdsIpWhiteListResponse({}));
    } else {
      return $dara.cast<ModifyDrdsIpWhiteListResponse>(await this.execute(params, req, runtime), new ModifyDrdsIpWhiteListResponse({}));
    }

  }

  /**
   * @param request - ModifyDrdsIpWhiteListRequest
   * @returns ModifyDrdsIpWhiteListResponse
   */
  async modifyDrdsIpWhiteList(request: ModifyDrdsIpWhiteListRequest): Promise<ModifyDrdsIpWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDrdsIpWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyPolarDbReadWeightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolarDbReadWeightResponse
   */
  async modifyPolarDbReadWeightWithOptions(request: ModifyPolarDbReadWeightRequest, runtime: $dara.RuntimeOptions): Promise<ModifyPolarDbReadWeightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dbNodeIds)) {
      query["DbNodeIds"] = request.dbNodeIds;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.weights)) {
      query["Weights"] = request.weights;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolarDbReadWeight",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyPolarDbReadWeightResponse>(await this.callApi(params, req, runtime), new ModifyPolarDbReadWeightResponse({}));
    } else {
      return $dara.cast<ModifyPolarDbReadWeightResponse>(await this.execute(params, req, runtime), new ModifyPolarDbReadWeightResponse({}));
    }

  }

  /**
   * @param request - ModifyPolarDbReadWeightRequest
   * @returns ModifyPolarDbReadWeightResponse
   */
  async modifyPolarDbReadWeight(request: ModifyPolarDbReadWeightRequest): Promise<ModifyPolarDbReadWeightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolarDbReadWeightWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyRdsReadWeightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRdsReadWeightResponse
   */
  async modifyRdsReadWeightWithOptions(request: ModifyRdsReadWeightRequest, runtime: $dara.RuntimeOptions): Promise<ModifyRdsReadWeightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.instanceNames)) {
      query["InstanceNames"] = request.instanceNames;
    }

    if (!$dara.isNull(request.weights)) {
      query["Weights"] = request.weights;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRdsReadWeight",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyRdsReadWeightResponse>(await this.callApi(params, req, runtime), new ModifyRdsReadWeightResponse({}));
    } else {
      return $dara.cast<ModifyRdsReadWeightResponse>(await this.execute(params, req, runtime), new ModifyRdsReadWeightResponse({}));
    }

  }

  /**
   * @param request - ModifyRdsReadWeightRequest
   * @returns ModifyRdsReadWeightResponse
   */
  async modifyRdsReadWeight(request: ModifyRdsReadWeightRequest): Promise<ModifyRdsReadWeightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRdsReadWeightWithOptions(request, runtime);
  }

  /**
   * @param request - PutStartBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutStartBackupResponse
   */
  async putStartBackupWithOptions(request: PutStartBackupRequest, runtime: $dara.RuntimeOptions): Promise<PutStartBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!$dara.isNull(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutStartBackup",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PutStartBackupResponse>(await this.callApi(params, req, runtime), new PutStartBackupResponse({}));
    } else {
      return $dara.cast<PutStartBackupResponse>(await this.execute(params, req, runtime), new PutStartBackupResponse({}));
    }

  }

  /**
   * @param request - PutStartBackupRequest
   * @returns PutStartBackupResponse
   */
  async putStartBackup(request: PutStartBackupRequest): Promise<PutStartBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putStartBackupWithOptions(request, runtime);
  }

  /**
   * @param request - RefreshDrdsAtomUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshDrdsAtomUrlResponse
   */
  async refreshDrdsAtomUrlWithOptions(request: RefreshDrdsAtomUrlRequest, runtime: $dara.RuntimeOptions): Promise<RefreshDrdsAtomUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshDrdsAtomUrl",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RefreshDrdsAtomUrlResponse>(await this.callApi(params, req, runtime), new RefreshDrdsAtomUrlResponse({}));
    } else {
      return $dara.cast<RefreshDrdsAtomUrlResponse>(await this.execute(params, req, runtime), new RefreshDrdsAtomUrlResponse({}));
    }

  }

  /**
   * @param request - RefreshDrdsAtomUrlRequest
   * @returns RefreshDrdsAtomUrlResponse
   */
  async refreshDrdsAtomUrl(request: RefreshDrdsAtomUrlRequest): Promise<RefreshDrdsAtomUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshDrdsAtomUrlWithOptions(request, runtime);
  }

  /**
   * @param request - ReleaseInstanceInternetAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceInternetAddressResponse
   */
  async releaseInstanceInternetAddressWithOptions(request: ReleaseInstanceInternetAddressRequest, runtime: $dara.RuntimeOptions): Promise<ReleaseInstanceInternetAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstanceInternetAddress",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReleaseInstanceInternetAddressResponse>(await this.callApi(params, req, runtime), new ReleaseInstanceInternetAddressResponse({}));
    } else {
      return $dara.cast<ReleaseInstanceInternetAddressResponse>(await this.execute(params, req, runtime), new ReleaseInstanceInternetAddressResponse({}));
    }

  }

  /**
   * @param request - ReleaseInstanceInternetAddressRequest
   * @returns ReleaseInstanceInternetAddressResponse
   */
  async releaseInstanceInternetAddress(request: ReleaseInstanceInternetAddressRequest): Promise<ReleaseInstanceInternetAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceInternetAddressWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveBackupsSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveBackupsSetResponse
   */
  async removeBackupsSetWithOptions(request: RemoveBackupsSetRequest, runtime: $dara.RuntimeOptions): Promise<RemoveBackupsSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveBackupsSet",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveBackupsSetResponse>(await this.callApi(params, req, runtime), new RemoveBackupsSetResponse({}));
    } else {
      return $dara.cast<RemoveBackupsSetResponse>(await this.execute(params, req, runtime), new RemoveBackupsSetResponse({}));
    }

  }

  /**
   * @param request - RemoveBackupsSetRequest
   * @returns RemoveBackupsSetResponse
   */
  async removeBackupsSet(request: RemoveBackupsSetRequest): Promise<RemoveBackupsSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeBackupsSetWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveDrdsDbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDrdsDbResponse
   */
  async removeDrdsDbWithOptions(request: RemoveDrdsDbRequest, runtime: $dara.RuntimeOptions): Promise<RemoveDrdsDbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDrdsDb",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveDrdsDbResponse>(await this.callApi(params, req, runtime), new RemoveDrdsDbResponse({}));
    } else {
      return $dara.cast<RemoveDrdsDbResponse>(await this.execute(params, req, runtime), new RemoveDrdsDbResponse({}));
    }

  }

  /**
   * @param request - RemoveDrdsDbRequest
   * @returns RemoveDrdsDbResponse
   */
  async removeDrdsDb(request: RemoveDrdsDbRequest): Promise<RemoveDrdsDbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDrdsDbWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveDrdsDbFailedRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDrdsDbFailedRecordResponse
   */
  async removeDrdsDbFailedRecordWithOptions(request: RemoveDrdsDbFailedRecordRequest, runtime: $dara.RuntimeOptions): Promise<RemoveDrdsDbFailedRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDrdsDbFailedRecord",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveDrdsDbFailedRecordResponse>(await this.callApi(params, req, runtime), new RemoveDrdsDbFailedRecordResponse({}));
    } else {
      return $dara.cast<RemoveDrdsDbFailedRecordResponse>(await this.execute(params, req, runtime), new RemoveDrdsDbFailedRecordResponse({}));
    }

  }

  /**
   * @param request - RemoveDrdsDbFailedRecordRequest
   * @returns RemoveDrdsDbFailedRecordResponse
   */
  async removeDrdsDbFailedRecord(request: RemoveDrdsDbFailedRecordRequest): Promise<RemoveDrdsDbFailedRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDrdsDbFailedRecordWithOptions(request, runtime);
  }

  /**
   * Releases an instance.
   * 
   * @remarks
   * > *   You can call this operation to release an instance that is charged based on only the pay-as-you-go billing method.
   * >*   If the specifications of the instance are being changed, or one or more databases exist in the instance, you cannot call this operation to release the instance.
   * 
   * @param request - RemoveDrdsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDrdsInstanceResponse
   */
  async removeDrdsInstanceWithOptions(request: RemoveDrdsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<RemoveDrdsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveDrdsInstanceResponse>(await this.callApi(params, req, runtime), new RemoveDrdsInstanceResponse({}));
    } else {
      return $dara.cast<RemoveDrdsInstanceResponse>(await this.execute(params, req, runtime), new RemoveDrdsInstanceResponse({}));
    }

  }

  /**
   * Releases an instance.
   * 
   * @remarks
   * > *   You can call this operation to release an instance that is charged based on only the pay-as-you-go billing method.
   * >*   If the specifications of the instance are being changed, or one or more databases exist in the instance, you cannot call this operation to release the instance.
   * 
   * @param request - RemoveDrdsInstanceRequest
   * @returns RemoveDrdsInstanceResponse
   */
  async removeDrdsInstance(request: RemoveDrdsInstanceRequest): Promise<RemoveDrdsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDrdsInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveInstanceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveInstanceAccountResponse
   */
  async removeInstanceAccountWithOptions(request: RemoveInstanceAccountRequest, runtime: $dara.RuntimeOptions): Promise<RemoveInstanceAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveInstanceAccount",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveInstanceAccountResponse>(await this.callApi(params, req, runtime), new RemoveInstanceAccountResponse({}));
    } else {
      return $dara.cast<RemoveInstanceAccountResponse>(await this.execute(params, req, runtime), new RemoveInstanceAccountResponse({}));
    }

  }

  /**
   * @param request - RemoveInstanceAccountRequest
   * @returns RemoveInstanceAccountResponse
   */
  async removeInstanceAccount(request: RemoveInstanceAccountRequest): Promise<RemoveInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeInstanceAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a table in the recycle bin.
   * 
   * @param request - RemoveRecycleBinTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveRecycleBinTableResponse
   */
  async removeRecycleBinTableWithOptions(request: RemoveRecycleBinTableRequest, runtime: $dara.RuntimeOptions): Promise<RemoveRecycleBinTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveRecycleBinTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveRecycleBinTableResponse>(await this.callApi(params, req, runtime), new RemoveRecycleBinTableResponse({}));
    } else {
      return $dara.cast<RemoveRecycleBinTableResponse>(await this.execute(params, req, runtime), new RemoveRecycleBinTableResponse({}));
    }

  }

  /**
   * Deletes a table in the recycle bin.
   * 
   * @param request - RemoveRecycleBinTableRequest
   * @returns RemoveRecycleBinTableResponse
   */
  async removeRecycleBinTable(request: RemoveRecycleBinTableRequest): Promise<RemoveRecycleBinTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeRecycleBinTableWithOptions(request, runtime);
  }

  /**
   * @param request - RestartDrdsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDrdsInstanceResponse
   */
  async restartDrdsInstanceWithOptions(request: RestartDrdsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<RestartDrdsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RestartDrdsInstanceResponse>(await this.callApi(params, req, runtime), new RestartDrdsInstanceResponse({}));
    } else {
      return $dara.cast<RestartDrdsInstanceResponse>(await this.execute(params, req, runtime), new RestartDrdsInstanceResponse({}));
    }

  }

  /**
   * @param request - RestartDrdsInstanceRequest
   * @returns RestartDrdsInstanceResponse
   */
  async restartDrdsInstance(request: RestartDrdsInstanceRequest): Promise<RestartDrdsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDrdsInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - RollbackInstanceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackInstanceVersionResponse
   */
  async rollbackInstanceVersionWithOptions(request: RollbackInstanceVersionRequest, runtime: $dara.RuntimeOptions): Promise<RollbackInstanceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackInstanceVersion",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RollbackInstanceVersionResponse>(await this.callApi(params, req, runtime), new RollbackInstanceVersionResponse({}));
    } else {
      return $dara.cast<RollbackInstanceVersionResponse>(await this.execute(params, req, runtime), new RollbackInstanceVersionResponse({}));
    }

  }

  /**
   * @param request - RollbackInstanceVersionRequest
   * @returns RollbackInstanceVersionResponse
   */
  async rollbackInstanceVersion(request: RollbackInstanceVersionRequest): Promise<RollbackInstanceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackInstanceVersionWithOptions(request, runtime);
  }

  /**
   * Modifies a backup policy.
   * 
   * @param request - SetBackupLocalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetBackupLocalResponse
   */
  async setBackupLocalWithOptions(request: SetBackupLocalRequest, runtime: $dara.RuntimeOptions): Promise<SetBackupLocalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.highSpaceUsageProtection)) {
      query["HighSpaceUsageProtection"] = request.highSpaceUsageProtection;
    }

    if (!$dara.isNull(request.localLogRetentionHours)) {
      query["LocalLogRetentionHours"] = request.localLogRetentionHours;
    }

    if (!$dara.isNull(request.localLogRetentionSpace)) {
      query["LocalLogRetentionSpace"] = request.localLogRetentionSpace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetBackupLocal",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetBackupLocalResponse>(await this.callApi(params, req, runtime), new SetBackupLocalResponse({}));
    } else {
      return $dara.cast<SetBackupLocalResponse>(await this.execute(params, req, runtime), new SetBackupLocalResponse({}));
    }

  }

  /**
   * Modifies a backup policy.
   * 
   * @param request - SetBackupLocalRequest
   * @returns SetBackupLocalResponse
   */
  async setBackupLocal(request: SetBackupLocalRequest): Promise<SetBackupLocalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setBackupLocalWithOptions(request, runtime);
  }

  /**
   * @param request - SetBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetBackupPolicyResponse
   */
  async setBackupPolicyWithOptions(request: SetBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<SetBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!$dara.isNull(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!$dara.isNull(request.backupLog)) {
      query["BackupLog"] = request.backupLog;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.dataBackupRetentionPeriod)) {
      query["DataBackupRetentionPeriod"] = request.dataBackupRetentionPeriod;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
    }

    if (!$dara.isNull(request.preferredBackupEndTime)) {
      query["PreferredBackupEndTime"] = request.preferredBackupEndTime;
    }

    if (!$dara.isNull(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!$dara.isNull(request.preferredBackupStartTime)) {
      query["PreferredBackupStartTime"] = request.preferredBackupStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetBackupPolicy",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetBackupPolicyResponse>(await this.callApi(params, req, runtime), new SetBackupPolicyResponse({}));
    } else {
      return $dara.cast<SetBackupPolicyResponse>(await this.execute(params, req, runtime), new SetBackupPolicyResponse({}));
    }

  }

  /**
   * @param request - SetBackupPolicyRequest
   * @returns SetBackupPolicyResponse
   */
  async setBackupPolicy(request: SetBackupPolicyRequest): Promise<SetBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Configures a broadcast table for a database.
   * 
   * @param request - SetupBroadcastTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetupBroadcastTablesResponse
   */
  async setupBroadcastTablesWithOptions(request: SetupBroadcastTablesRequest, runtime: $dara.RuntimeOptions): Promise<SetupBroadcastTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetupBroadcastTables",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetupBroadcastTablesResponse>(await this.callApi(params, req, runtime), new SetupBroadcastTablesResponse({}));
    } else {
      return $dara.cast<SetupBroadcastTablesResponse>(await this.execute(params, req, runtime), new SetupBroadcastTablesResponse({}));
    }

  }

  /**
   * Configures a broadcast table for a database.
   * 
   * @param request - SetupBroadcastTablesRequest
   * @returns SetupBroadcastTablesResponse
   */
  async setupBroadcastTables(request: SetupBroadcastTablesRequest): Promise<SetupBroadcastTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setupBroadcastTablesWithOptions(request, runtime);
  }

  /**
   * @param request - SetupDrdsParamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetupDrdsParamsResponse
   */
  async setupDrdsParamsWithOptions(request: SetupDrdsParamsRequest, runtime: $dara.RuntimeOptions): Promise<SetupDrdsParamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.paramLevel)) {
      query["ParamLevel"] = request.paramLevel;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetupDrdsParams",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetupDrdsParamsResponse>(await this.callApi(params, req, runtime), new SetupDrdsParamsResponse({}));
    } else {
      return $dara.cast<SetupDrdsParamsResponse>(await this.execute(params, req, runtime), new SetupDrdsParamsResponse({}));
    }

  }

  /**
   * @param request - SetupDrdsParamsRequest
   * @returns SetupDrdsParamsResponse
   */
  async setupDrdsParams(request: SetupDrdsParamsRequest): Promise<SetupDrdsParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setupDrdsParamsWithOptions(request, runtime);
  }

  /**
   * Enables the table recycle bin for a database.
   * 
   * @param request - SetupRecycleBinStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetupRecycleBinStatusResponse
   */
  async setupRecycleBinStatusWithOptions(request: SetupRecycleBinStatusRequest, runtime: $dara.RuntimeOptions): Promise<SetupRecycleBinStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.statusAction)) {
      query["StatusAction"] = request.statusAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetupRecycleBinStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetupRecycleBinStatusResponse>(await this.callApi(params, req, runtime), new SetupRecycleBinStatusResponse({}));
    } else {
      return $dara.cast<SetupRecycleBinStatusResponse>(await this.execute(params, req, runtime), new SetupRecycleBinStatusResponse({}));
    }

  }

  /**
   * Enables the table recycle bin for a database.
   * 
   * @param request - SetupRecycleBinStatusRequest
   * @returns SetupRecycleBinStatusResponse
   */
  async setupRecycleBinStatus(request: SetupRecycleBinStatusRequest): Promise<SetupRecycleBinStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setupRecycleBinStatusWithOptions(request, runtime);
  }

  /**
   * @param request - SetupTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetupTableResponse
   */
  async setupTableWithOptions(request: SetupTableRequest, runtime: $dara.RuntimeOptions): Promise<SetupTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowFullTableScan)) {
      query["AllowFullTableScan"] = request.allowFullTableScan;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetupTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetupTableResponse>(await this.callApi(params, req, runtime), new SetupTableResponse({}));
    } else {
      return $dara.cast<SetupTableResponse>(await this.execute(params, req, runtime), new SetupTableResponse({}));
    }

  }

  /**
   * @param request - SetupTableRequest
   * @returns SetupTableResponse
   */
  async setupTable(request: SetupTableRequest): Promise<SetupTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setupTableWithOptions(request, runtime);
  }

  /**
   * @param request - StartRestoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRestoreResponse
   */
  async startRestoreWithOptions(request: StartRestoreRequest, runtime: $dara.RuntimeOptions): Promise<StartRestoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRestore",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartRestoreResponse>(await this.callApi(params, req, runtime), new StartRestoreResponse({}));
    } else {
      return $dara.cast<StartRestoreResponse>(await this.execute(params, req, runtime), new StartRestoreResponse({}));
    }

  }

  /**
   * @param request - StartRestoreRequest
   * @returns StartRestoreResponse
   */
  async startRestore(request: StartRestoreRequest): Promise<StartRestoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRestoreWithOptions(request, runtime);
  }

  /**
   * Submits a cleanup task for the scale-out of a PolarDB-X database.
   * 
   * @param request - SubmitCleanTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCleanTaskResponse
   */
  async submitCleanTaskWithOptions(request: SubmitCleanTaskRequest, runtime: $dara.RuntimeOptions): Promise<SubmitCleanTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.expandType)) {
      query["ExpandType"] = request.expandType;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.parentJobId)) {
      query["ParentJobId"] = request.parentJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCleanTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitCleanTaskResponse>(await this.callApi(params, req, runtime), new SubmitCleanTaskResponse({}));
    } else {
      return $dara.cast<SubmitCleanTaskResponse>(await this.execute(params, req, runtime), new SubmitCleanTaskResponse({}));
    }

  }

  /**
   * Submits a cleanup task for the scale-out of a PolarDB-X database.
   * 
   * @param request - SubmitCleanTaskRequest
   * @returns SubmitCleanTaskResponse
   */
  async submitCleanTask(request: SubmitCleanTaskRequest): Promise<SubmitCleanTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCleanTaskWithOptions(request, runtime);
  }

  /**
   * Submits a precheck task for the hot-spot scale-out of a PolarDB-X database. The task is used to check the table that does not contain the primary key.
   * 
   * @param request - SubmitHotExpandPreCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitHotExpandPreCheckTaskResponse
   */
  async submitHotExpandPreCheckTaskWithOptions(request: SubmitHotExpandPreCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<SubmitHotExpandPreCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.tableList)) {
      query["TableList"] = request.tableList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitHotExpandPreCheckTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitHotExpandPreCheckTaskResponse>(await this.callApi(params, req, runtime), new SubmitHotExpandPreCheckTaskResponse({}));
    } else {
      return $dara.cast<SubmitHotExpandPreCheckTaskResponse>(await this.execute(params, req, runtime), new SubmitHotExpandPreCheckTaskResponse({}));
    }

  }

  /**
   * Submits a precheck task for the hot-spot scale-out of a PolarDB-X database. The task is used to check the table that does not contain the primary key.
   * 
   * @param request - SubmitHotExpandPreCheckTaskRequest
   * @returns SubmitHotExpandPreCheckTaskResponse
   */
  async submitHotExpandPreCheckTask(request: SubmitHotExpandPreCheckTaskRequest): Promise<SubmitHotExpandPreCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitHotExpandPreCheckTaskWithOptions(request, runtime);
  }

  /**
   * Submits a hot-spot scale-out task for a database.
   * 
   * @param request - SubmitHotExpandTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitHotExpandTaskResponse
   */
  async submitHotExpandTaskWithOptions(request: SubmitHotExpandTaskRequest, runtime: $dara.RuntimeOptions): Promise<SubmitHotExpandTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.extendedMapping)) {
      query["ExtendedMapping"] = request.extendedMapping;
    }

    if (!$dara.isNull(request.instanceDbMapping)) {
      query["InstanceDbMapping"] = request.instanceDbMapping;
    }

    if (!$dara.isNull(request.mapping)) {
      query["Mapping"] = request.mapping;
    }

    if (!$dara.isNull(request.supperAccountMapping)) {
      query["SupperAccountMapping"] = request.supperAccountMapping;
    }

    if (!$dara.isNull(request.taskDesc)) {
      query["TaskDesc"] = request.taskDesc;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitHotExpandTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitHotExpandTaskResponse>(await this.callApi(params, req, runtime), new SubmitHotExpandTaskResponse({}));
    } else {
      return $dara.cast<SubmitHotExpandTaskResponse>(await this.execute(params, req, runtime), new SubmitHotExpandTaskResponse({}));
    }

  }

  /**
   * Submits a hot-spot scale-out task for a database.
   * 
   * @param request - SubmitHotExpandTaskRequest
   * @returns SubmitHotExpandTaskResponse
   */
  async submitHotExpandTask(request: SubmitHotExpandTaskRequest): Promise<SubmitHotExpandTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitHotExpandTaskWithOptions(request, runtime);
  }

  /**
   * Submits a precheck task for the smooth scale-out of a PolarDB-X database.
   * 
   * @param request - SubmitSmoothExpandPreCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSmoothExpandPreCheckResponse
   */
  async submitSmoothExpandPreCheckWithOptions(request: SubmitSmoothExpandPreCheckRequest, runtime: $dara.RuntimeOptions): Promise<SubmitSmoothExpandPreCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSmoothExpandPreCheck",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitSmoothExpandPreCheckResponse>(await this.callApi(params, req, runtime), new SubmitSmoothExpandPreCheckResponse({}));
    } else {
      return $dara.cast<SubmitSmoothExpandPreCheckResponse>(await this.execute(params, req, runtime), new SubmitSmoothExpandPreCheckResponse({}));
    }

  }

  /**
   * Submits a precheck task for the smooth scale-out of a PolarDB-X database.
   * 
   * @param request - SubmitSmoothExpandPreCheckRequest
   * @returns SubmitSmoothExpandPreCheckResponse
   */
  async submitSmoothExpandPreCheck(request: SubmitSmoothExpandPreCheckRequest): Promise<SubmitSmoothExpandPreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSmoothExpandPreCheckWithOptions(request, runtime);
  }

  /**
   * Submits a precheck task for the smooth scale-out of a PolarDB-X 1.0 database.
   * 
   * @param request - SubmitSmoothExpandPreCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSmoothExpandPreCheckTaskResponse
   */
  async submitSmoothExpandPreCheckTaskWithOptions(request: SubmitSmoothExpandPreCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<SubmitSmoothExpandPreCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSmoothExpandPreCheckTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitSmoothExpandPreCheckTaskResponse>(await this.callApi(params, req, runtime), new SubmitSmoothExpandPreCheckTaskResponse({}));
    } else {
      return $dara.cast<SubmitSmoothExpandPreCheckTaskResponse>(await this.execute(params, req, runtime), new SubmitSmoothExpandPreCheckTaskResponse({}));
    }

  }

  /**
   * Submits a precheck task for the smooth scale-out of a PolarDB-X 1.0 database.
   * 
   * @param request - SubmitSmoothExpandPreCheckTaskRequest
   * @returns SubmitSmoothExpandPreCheckTaskResponse
   */
  async submitSmoothExpandPreCheckTask(request: SubmitSmoothExpandPreCheckTaskRequest): Promise<SubmitSmoothExpandPreCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSmoothExpandPreCheckTaskWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitSqlFlashbackTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSqlFlashbackTaskResponse
   */
  async submitSqlFlashbackTaskWithOptions(request: SubmitSqlFlashbackTaskRequest, runtime: $dara.RuntimeOptions): Promise<SubmitSqlFlashbackTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.recallRestoreType)) {
      query["RecallRestoreType"] = request.recallRestoreType;
    }

    if (!$dara.isNull(request.recallType)) {
      query["RecallType"] = request.recallType;
    }

    if (!$dara.isNull(request.sqlPk)) {
      query["SqlPk"] = request.sqlPk;
    }

    if (!$dara.isNull(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.traceId)) {
      query["TraceId"] = request.traceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSqlFlashbackTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SubmitSqlFlashbackTaskResponse>(await this.callApi(params, req, runtime), new SubmitSqlFlashbackTaskResponse({}));
    } else {
      return $dara.cast<SubmitSqlFlashbackTaskResponse>(await this.execute(params, req, runtime), new SubmitSqlFlashbackTaskResponse({}));
    }

  }

  /**
   * @param request - SubmitSqlFlashbackTaskRequest
   * @returns SubmitSqlFlashbackTaskResponse
   */
  async submitSqlFlashbackTask(request: SubmitSqlFlashbackTaskRequest): Promise<SubmitSqlFlashbackTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSqlFlashbackTaskWithOptions(request, runtime);
  }

  /**
   * Switches the mode of broadcast tables from the multi-write mode to the asynchronous link mode.
   * 
   * @param request - SwitchGlobalBroadcastTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchGlobalBroadcastTypeResponse
   */
  async switchGlobalBroadcastTypeWithOptions(request: SwitchGlobalBroadcastTypeRequest, runtime: $dara.RuntimeOptions): Promise<SwitchGlobalBroadcastTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchGlobalBroadcastType",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SwitchGlobalBroadcastTypeResponse>(await this.callApi(params, req, runtime), new SwitchGlobalBroadcastTypeResponse({}));
    } else {
      return $dara.cast<SwitchGlobalBroadcastTypeResponse>(await this.execute(params, req, runtime), new SwitchGlobalBroadcastTypeResponse({}));
    }

  }

  /**
   * Switches the mode of broadcast tables from the multi-write mode to the asynchronous link mode.
   * 
   * @param request - SwitchGlobalBroadcastTypeRequest
   * @returns SwitchGlobalBroadcastTypeResponse
   */
  async switchGlobalBroadcastType(request: SwitchGlobalBroadcastTypeRequest): Promise<SwitchGlobalBroadcastTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchGlobalBroadcastTypeWithOptions(request, runtime);
  }

  /**
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes the network type of a PolarDB-X 1.0 instance.
   * 
   * @param request - UpdateInstanceNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNetworkResponse
   */
  async updateInstanceNetworkWithOptions(request: UpdateInstanceNetworkRequest, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classicExpiredDays)) {
      query["ClassicExpiredDays"] = request.classicExpiredDays;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.retainClassic)) {
      query["RetainClassic"] = request.retainClassic;
    }

    if (!$dara.isNull(request.srcInstanceNetworkType)) {
      query["SrcInstanceNetworkType"] = request.srcInstanceNetworkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceNetwork",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceNetworkResponse>(await this.callApi(params, req, runtime), new UpdateInstanceNetworkResponse({}));
    } else {
      return $dara.cast<UpdateInstanceNetworkResponse>(await this.execute(params, req, runtime), new UpdateInstanceNetworkResponse({}));
    }

  }

  /**
   * Changes the network type of a PolarDB-X 1.0 instance.
   * 
   * @param request - UpdateInstanceNetworkRequest
   * @returns UpdateInstanceNetworkResponse
   */
  async updateInstanceNetwork(request: UpdateInstanceNetworkRequest): Promise<UpdateInstanceNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceNetworkWithOptions(request, runtime);
  }

  /**
   * Updates the specifications of a custom ApsaraDB RDS instance at the storage layer.
   * 
   * @param request - UpdatePrivateRdsClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivateRdsClassResponse
   */
  async updatePrivateRdsClassWithOptions(request: UpdatePrivateRdsClassRequest, runtime: $dara.RuntimeOptions): Promise<UpdatePrivateRdsClassResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.prePayDuration)) {
      query["PrePayDuration"] = request.prePayDuration;
    }

    if (!$dara.isNull(request.rdsClass)) {
      query["RdsClass"] = request.rdsClass;
    }

    if (!$dara.isNull(request.storage)) {
      query["Storage"] = request.storage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrivateRdsClass",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdatePrivateRdsClassResponse>(await this.callApi(params, req, runtime), new UpdatePrivateRdsClassResponse({}));
    } else {
      return $dara.cast<UpdatePrivateRdsClassResponse>(await this.execute(params, req, runtime), new UpdatePrivateRdsClassResponse({}));
    }

  }

  /**
   * Updates the specifications of a custom ApsaraDB RDS instance at the storage layer.
   * 
   * @param request - UpdatePrivateRdsClassRequest
   * @returns UpdatePrivateRdsClassResponse
   */
  async updatePrivateRdsClass(request: UpdatePrivateRdsClassRequest): Promise<UpdatePrivateRdsClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrivateRdsClassWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateResourceGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceGroupAttributeResponse
   */
  async updateResourceGroupAttributeWithOptions(request: UpdateResourceGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateResourceGroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceGroupAttribute",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateResourceGroupAttributeResponse>(await this.callApi(params, req, runtime), new UpdateResourceGroupAttributeResponse({}));
    } else {
      return $dara.cast<UpdateResourceGroupAttributeResponse>(await this.execute(params, req, runtime), new UpdateResourceGroupAttributeResponse({}));
    }

  }

  /**
   * @param request - UpdateResourceGroupAttributeRequest
   * @returns UpdateResourceGroupAttributeResponse
   */
  async updateResourceGroupAttribute(request: UpdateResourceGroupAttributeRequest): Promise<UpdateResourceGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Upgrades the version of a column-oriented storage instance of a PolarDB-X 1.0 instance.
   * 
   * @param request - UpgradeHiStoreInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeHiStoreInstanceResponse
   */
  async upgradeHiStoreInstanceWithOptions(request: UpgradeHiStoreInstanceRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeHiStoreInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.historeInstanceId)) {
      query["HistoreInstanceId"] = request.historeInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeHiStoreInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeHiStoreInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeHiStoreInstanceResponse({}));
    } else {
      return $dara.cast<UpgradeHiStoreInstanceResponse>(await this.execute(params, req, runtime), new UpgradeHiStoreInstanceResponse({}));
    }

  }

  /**
   * Upgrades the version of a column-oriented storage instance of a PolarDB-X 1.0 instance.
   * 
   * @param request - UpgradeHiStoreInstanceRequest
   * @returns UpgradeHiStoreInstanceResponse
   */
  async upgradeHiStoreInstance(request: UpgradeHiStoreInstanceRequest): Promise<UpgradeHiStoreInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeHiStoreInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - UpgradeInstanceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeInstanceVersionResponse
   */
  async upgradeInstanceVersionWithOptions(request: UpgradeInstanceVersionRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeInstanceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rpm)) {
      query["Rpm"] = request.rpm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeInstanceVersion",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeInstanceVersionResponse>(await this.callApi(params, req, runtime), new UpgradeInstanceVersionResponse({}));
    } else {
      return $dara.cast<UpgradeInstanceVersionResponse>(await this.execute(params, req, runtime), new UpgradeInstanceVersionResponse({}));
    }

  }

  /**
   * @param request - UpgradeInstanceVersionRequest
   * @returns UpgradeInstanceVersionResponse
   */
  async upgradeInstanceVersion(request: UpgradeInstanceVersionRequest): Promise<UpgradeInstanceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeInstanceVersionWithOptions(request, runtime);
  }

  /**
   * @param request - ValidateShardTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateShardTaskResponse
   */
  async validateShardTaskWithOptions(request: ValidateShardTaskRequest, runtime: $dara.RuntimeOptions): Promise<ValidateShardTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceTableName)) {
      query["SourceTableName"] = request.sourceTableName;
    }

    if (!$dara.isNull(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateShardTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ValidateShardTaskResponse>(await this.callApi(params, req, runtime), new ValidateShardTaskResponse({}));
    } else {
      return $dara.cast<ValidateShardTaskResponse>(await this.execute(params, req, runtime), new ValidateShardTaskResponse({}));
    }

  }

  /**
   * @param request - ValidateShardTaskRequest
   * @returns ValidateShardTaskResponse
   */
  async validateShardTask(request: ValidateShardTaskRequest): Promise<ValidateShardTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateShardTaskWithOptions(request, runtime);
  }

}
