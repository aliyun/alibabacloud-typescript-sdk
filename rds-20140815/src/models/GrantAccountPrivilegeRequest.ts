// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantAccountPrivilegeRequest extends $dara.Model {
  /**
   * @remarks
   * The account name. You can call [DescribeAccounts](https://help.aliyun.com/document_detail/610454.html) to query the account name.
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  accountName?: string;
  /**
   * @remarks
   * The type of account permission. If you specify multiple values for DBName, you must specify the same number of permission types in the same order, separated by commas (,).
   * 
   * The supported permission types vary by database engine. Valid values:
   * > For more information about account permissions, see [MySQL/MariaDB permission list](https://help.aliyun.com/document_detail/146395.html), [SQL Server permission list](https://help.aliyun.com/document_detail/95692.html), and [PostgreSQL permission list](https://help.aliyun.com/document_detail/257684.html).
   * <details>
   * <summary>ApsaraDB RDS for MySQL/ApsaraDB RDS for MariaDB</summary>
   * 
   * - **ReadWrite**: read and write.
   * - **ReadOnly**: read-only.
   * - **DDLOnly**: DDL only.
   * - **DMLOnly**: DML only.
   * 
   * </details>
   * 
   * <details>
   * <summary>ApsaraDB RDS for SQL Server</summary>
   * 
   * - **ReadWrite**: read and write. This permission corresponds to the `db_datawriter` and `db_datareader` database roles in SQL Server.
   * - **ReadOnly**: read-only. This permission corresponds to the `db_datareader` database role in SQL Server.
   * - **DBOwner**: database owner. This permission corresponds to the `db_owner` database role in SQL Server.
   * > For more information about database-level roles, see [Microsoft official documentation](https://learn.microsoft.com/en-us/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-ver16).
   * </details>
   * 
   * <details>
   * <summary>ApsaraDB RDS for PostgreSQL</summary>
   * 
   * **DBOwner**: database owner.
   * > For fine-grained permission management, see [Best practices for PostgreSQL permission management](https://help.aliyun.com/document_detail/352149.html).
   * </details>
   * 
   * This parameter is required.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database to which you want to grant access permissions. To grant permissions on multiple databases at a time, separate the database names with commas (,), such as `db1,db2,db3`.
   * 
   * This parameter is required.
   * 
   * @example
   * testDB1
   */
  DBName?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
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

