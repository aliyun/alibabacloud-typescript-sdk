// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The character set.
   * 
   * *   Valid values for MySQL or MariaDB databases: **utf8, gbk, latin1, and utf8mb4**
   * 
   * *   Valid values for SQL Server databases: **Chinese_PRC_CI_AS, Chinese_PRC_CS_AS, SQL_Latin1_General_CP1_CI_AS, SQL_Latin1_General_CP1_CS_AS, and Chinese_PRC_BIN**
   * 
   * *   Valid values for PostgreSQL databases: a value in the `Character set,<Collate>,<Ctype>` format. Example: `UTF8,C,en_US.utf8`.
   * 
   *     *   Valid values for the character set: **KOI8U, UTF8, WIN866, WIN874, WIN1250, WIN1251, WIN1252, WIN1253, WIN1254, WIN1255, WIN1256, WIN1257, WIN1258, EUC_CN, EUC_KR, EUC_TW, EUC_JP, EUC_JIS_2004, KOI8R, MULE_INTERNAL, LATIN1, LATIN2, LATIN3, LATIN4, LATIN5, LATIN6, LATIN7, LATIN8, LATIN9, LATIN10, ISO_8859_5, ISO_8859_6, ISO_8859_7, ISO_8859_8, and SQL_ASCII**
   *     *   Valid values for the **Collate** field: You can execute the `SELECT DISTINCT collname FROM pg_collation;` statement to obtain the field value. The default value is **C**.
   *     *   Valid values for the **Ctype** field: You can execute the `SELECT DISTINCT collctype FROM pg_collation;` statement to obtain the field value. The default value is **en_US.utf8**.
   * 
   * This parameter is required.
   * 
   * @example
   * gbk
   */
  characterSetName?: string;
  /**
   * @remarks
   * The description of the database. The description must be 2 to 256 characters in length and can contain letters, digits, underscores (_), and hyphens (-). The description must start with a letter.
   * 
   * > The value cannot start with `http://` or `https://`.
   * 
   * @example
   * Database for testing
   */
  DBDescription?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to query the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * > *   The name must be 2 to 64 characters in length.
   * > *   The name must start with a lowercase letter and end with a lowercase letter or digit.
   * > *   The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
   * > *   The name must be unique within the instance.
   * > *   For more information about invalid characters, see [Forbidden keywords table](https://help.aliyun.com/document_detail/26317.html).
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
      characterSetName: 'CharacterSetName',
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
      characterSetName: 'string',
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

