// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  accountName?: string;
  accountPrivilege?: string;
  /**
   * @remarks
   * The character set. Valid values:
   * * MySQL/MariaDB: **utf8, gbk, latin1, utf8mb4**
   * * SQL Server: **Chinese_PRC_CI_AS, Chinese_PRC_CS_AS, SQL_Latin1_General_CP1_CI_AS, SQL_Latin1_General_CP1_CS_AS, Chinese_PRC_BIN**
   * * PostgreSQL: You must specify the character set, Collate, and Ctype in the format of `Character set,<Collate>,<Ctype>`. Example: `UTF8,C,en_US.utf8`.
   *     - Valid values for the character set: **KOI8U, UTF8, WIN866, WIN874, WIN1250, WIN1251, WIN1252, WIN1253, WIN1254, WIN1255, WIN1256, WIN1257, WIN1258, EUC_CN, EUC_KR, EUC_TW, EUC_JP, EUC_JIS_2004, KOI8R, MULE_INTERNAL, LATIN1, LATIN2, LATIN3, LATIN4, LATIN5, LATIN6, LATIN7, LATIN8, LATIN9, LATIN10, ISO_8859_5, ISO_8859_6, ISO_8859_7, ISO_8859_8, SQL_ASCII**.
   *     - Valid values for **Collate**: You can run the `SELECT DISTINCT collname FROM pg_collation;` command to query the valid values. If this parameter is not specified, the default value **C** is used.
   *     - Valid values for **Ctype**: You can run the `SELECT DISTINCT collctype FROM pg_collation;` command to query the valid values. If this parameter is not specified, the default value **en_US.utf8** is used.
   * 
   * This parameter is required.
   * 
   * @example
   * gbk
   */
  characterSetName?: string;
  /**
   * @remarks
   * The collation. This parameter is supported only for ApsaraDB RDS for MySQL instances. Specify a collation that matches the character set. For example, if the character set is utf8mb4, the collation must be utf8mb4_bin or utf8mb4_general_ci.
   * 
   * @example
   * gbk_chinese_ci
   */
  collationName?: string;
  /**
   * @remarks
   * The database description. The description must be 2 to 256 characters in length and can contain letters, digits, Chinese characters, underscores (_), and hyphens (-). The description must start with a Chinese character or a letter.
   * >The description cannot start with `http://` or `https://`.
   * 
   * @example
   * testdb
   */
  DBDescription?: string;
  /**
   * @remarks
   * The instance ID. You can call DescribeDBInstances to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * > * The name must be 2 to 64 characters in length.
   * > * The name must start with a letter and end with a letter or digit.
   * > * The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
   * > * The database name must be unique within the instance.
   * > * For more information about invalid characters, see [Reserved words](https://help.aliyun.com/document_detail/26317.html).
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

