// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account. You can call the [DescribeAccounts](https://help.aliyun.com/document_detail/610454.html) operation to query the name.
   * 
   * @example
   * test1
   */
  accountName?: string;
  /**
   * @remarks
   * The type of permission granted to the account. If you specify multiple database names, you must specify the same number of permission types in the same order and separate them with commas (,).
   * 
   * Different database engines support different permission types. Valid values:
   * > For more information about account permissions, see [Permission list for ApsaraDB RDS for MySQL and ApsaraDB RDS for MariaDB](https://help.aliyun.com/document_detail/146395.html), [Permission list for ApsaraDB RDS for SQL Server](https://help.aliyun.com/document_detail/95692.html), and [Permission list for ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/257684.html).
   * <details>
   * <summary>ApsaraDB RDS for MySQL and ApsaraDB RDS for MariaDB</summary>
   * 
   * - **ReadWrite**: read and write
   * - **ReadOnly**: read-only
   * - **DDLOnly**: DDL-only
   * - **DMLOnly**: DML-only
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
   * **DBOwner**: database owner
   * > For more information about fine-grained permission management for accounts, see [Best practices for permission management in ApsaraDB RDS for PostgreSQL](https://help.aliyun.com/document_detail/352149.html).
   * </details>
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The character set. Valid values:
   * * ApsaraDB RDS for MySQL and ApsaraDB RDS for MariaDB: **utf8**, **gbk**, **latin1**, and **utf8mb4**.
   * * ApsaraDB RDS for SQL Server: **Chinese_PRC_CI_AS**, **Chinese_PRC_CS_AS**, **SQL_Latin1_General_CP1_CI_AS**, **SQL_Latin1_General_CP1_CS_AS**, and **Chinese_PRC_BIN**.
   * * ApsaraDB RDS for PostgreSQL: You must configure the character set, collation, and ctype in the `character set,<collation>,<ctype>` format. Example: `UTF8,C,en_US.utf8`.
   *     - Valid values for the character set: **KOI8U, UTF8, WIN866, WIN874, WIN1250, WIN1251, WIN1252, WIN1253, WIN1254, WIN1255, WIN1256, WIN1257, WIN1258, EUC_CN, EUC_KR, EUC_TW, EUC_JP, EUC_JIS_2004, KOI8R, MULE_INTERNAL, LATIN1, LATIN2, LATIN3, LATIN4, LATIN5, LATIN6, LATIN7, LATIN8, LATIN9, LATIN10, ISO_8859_5, ISO_8859_6, ISO_8859_7, ISO_8859_8, and SQL_ASCII**.
   *     - Valid values for **collation**: You can execute the `SELECT DISTINCT collname FROM pg_collation;` statement to query the values. If you do not configure this parameter, the default value is **C**.
   *     - Valid values for **ctype**: You can execute the `SELECT DISTINCT collctype FROM pg_collation;` statement to query the values. If you do not configure this parameter, the default value is **en_US.utf8**.
   * 
   * This parameter is required.
   * 
   * @example
   * gbk
   */
  characterSetName?: string;
  /**
   * @remarks
   * The collation. This parameter is only supported for ApsaraDB RDS for MySQL instances. Specify a collation that matches the character set. For example, if the character set is utf8mb4, the collation must be utf8mb4_bin or utf8mb4_general_ci.
   * 
   * @example
   * gbk_chinese_ci
   */
  collationName?: string;
  /**
   * @remarks
   * The description of the database. The description must be 2 to 256 characters in length. It must start with a Chinese or English letter and can contain digits, Chinese characters, English letters, underscores (_), and hyphens (-).
   * > It cannot start with http:// or https://.
   * 
   * @example
   * testdb
   */
  DBDescription?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * > * The name must be 2 to 64 characters in length.
   * > * It must start with a letter and end with a letter or digit.
   * > * It can contain lowercase letters, digits, underscores (_), and hyphens (-).
   * > * The database name must be unique within the instance.
   * > * For other invalid characters, see [Reserved keywords](https://help.aliyun.com/document_detail/26317.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rds_mysql
   */
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      characterSetName: 'CharacterSetName',
      collationName: 'CollationName',
      DBDescription: 'DBDescription',
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      characterSetName: 'string',
      collationName: 'string',
      DBDescription: 'string',
      DBInstanceId: 'string',
      DBName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
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

