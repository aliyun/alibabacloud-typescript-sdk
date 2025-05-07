// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The backup type of the instance. Valid values:
   * 
   * *   **Logical**: logical backup
   * *   **Physical**: physical backup
   * *   **Snapshot**: snapshot backup
   * 
   * Default value: **Physical**.
   * 
   * > *   You can perform a logical backup only when databases are created on the instance.
   * > *   When you perform a snapshot backup on an ApsaraDB RDS for MariaDB instance, you must set this parameter to **Physical**.
   * > *   For more information about the supported backup types, see [Use the data backup feature](https://help.aliyun.com/document_detail/98818.html).
   * > *   When you perform a snapshot backup on an ApsaraDB RDS for SQL Server instance that uses cloud disks, you must set this parameter to **Snapshot**.
   * 
   * @example
   * Physical
   */
  backupMethod?: string;
  /**
   * @remarks
   * The backup policy. Valid values:
   * 
   * *   **db**: a database-level backup.
   * *   **instance**: an instance-level backup.
   * 
   * > You can specify this parameter when you perform a logical backup on an ApsaraDB RDS for MySQL instance. You can also specify this parameter when you perform a full physical backup on an ApsaraDB RDS for SQL Server instance.
   * 
   * @example
   * db
   */
  backupStrategy?: string;
  /**
   * @remarks
   * The backup method. Valid values:
   * 
   * *   **Auto**: full or incremental backup that is automatically selected
   * *   **FullBackup**: full backup
   * 
   * Default value: **Auto**.
   * 
   * > *   You must set this parameter only when the instance runs SQL Server.
   * > *   This parameter is valid only when you set the **BackupMethod** parameter to **Physical**.
   * 
   * @example
   * Auto
   */
  backupType?: string;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The names of the databases whose data you want to back up. Separate the names of the databases with commas (,).
   * 
   * > You can specify this parameter when you perform a logical backup on individual databases of an ApsaraDB RDS for MySQL instance. You can also specify this parameter when you perform a full physical backup on individual databases of an ApsaraDB RDS for SQL Server instance.
   * 
   * @example
   * rds_mysql
   */
  DBName?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupMethod: 'BackupMethod',
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

