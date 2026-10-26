// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The backup method. Valid values:
   * * **Logical**: logical backup (supported only for ApsaraDB RDS for MySQL instances with local SSDs)
   * * **Physical**: physical backup (supported for ApsaraDB RDS for MySQL instances with local SSDs, ApsaraDB RDS for SQL Server, and ApsaraDB RDS for PostgreSQL)
   * * **Snapshot**: snapshot backup (supported for ApsaraDB RDS for MySQL instances with cloud disks, ApsaraDB RDS for SQL Server, ApsaraDB RDS for PostgreSQL, and ApsaraDB RDS for MariaDB)
   * 
   * Default value: **Physical**.
   * 
   * > * When you use logical backup, the database must contain data.
   * > * ApsaraDB RDS for MariaDB instances support only snapshot backup, but you must set this parameter to **Physical**.
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * - **SQL Server**: When the BackupStrategy parameter is set to db, the BackupMethod parameter is set to Physical, and the BackupType parameter is set to FullBackup, you can specify the retention period of the backup set. Valid values: 7 to 730 days, and -1 (long-term retention (LTR)).
   * - **MySQL**: You can specify the retention period of the backup set. Valid values: 7 to 730 days, and -1 (long-term retention (LTR)).
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The backup strategy. Valid values:
   * * **db**: database-level backup
   * * **instance**: instance-level backup
   * 
   * > This parameter takes effect only when the following conditions are met:
   * > - For ApsaraDB RDS for MySQL: The **BackupMethod** parameter is set to **Logical**.
   * > - For ApsaraDB RDS for SQL Server: The **BackupType** parameter is set to **FullBackup**.
   * 
   * @example
   * db
   */
  backupStrategy?: string;
  /**
   * @remarks
   * The backup type for ApsaraDB RDS for SQL Server instances. Valid values:
   * * **Auto** (default): automatically selects full backup or incremental backup
   * * **FullBackup**: full backup
   * 
   * > This parameter takes effect only when the **BackupMethod** parameter is set to **Physical**.
   * 
   * @example
   * Auto
   */
  backupType?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The list of databases. Separate multiple databases with commas (,).
   * > This parameter takes effect only when the **BackupStrategy** parameter is set to **db**.
   * 
   * @example
   * rds_mysql
   */
  DBName?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupMethod: 'BackupMethod',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupStrategy: 'BackupStrategy',
      backupType: 'BackupType',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupMethod: 'string',
      backupRetentionPeriod: 'number',
      backupStrategy: 'string',
      backupType: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

