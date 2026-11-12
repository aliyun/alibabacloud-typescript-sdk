// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The character set.
   * 
   * For valid values, see References [https://www.postgresql.org/docs/current/multibyte.html](url).
   * 
   * Default value: UTF8.
   * 
   * @example
   * UTF8
   */
  characterSetName?: string;
  /**
   * @remarks
   * The collation parameter of the database, which specifies the string comparison and sorting rules.
   * >
   * > - The locale must be compatible with the character set specified by the CharacterSetName parameter.
   * > - Valid values for Collate: You can run the `SELECT DISTINCT collname FROM pg_collation;` command to query the valid values. If this parameter is not specified, the default value is en_US.utf8.
   * 
   * @example
   * en_US.utf8
   */
  collate?: string;
  /**
   * @remarks
   * The character type parameter of the database, which specifies the character classification and case conversion rules.
   * > 
   * > - The locale must be compatible with the character set specified by the CharacterSetName parameter.
   * > - You can run the `SELECT DISTINCT collctype FROM pg_collation;` command to query the valid values. If this parameter is not specified, the default value is en_US.utf8.
   * 
   * @example
   * en_US.utf8
   */
  ctype?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database. The name must meet the following requirements:
   * - It can contain only letters, digits, and underscores (_).
   * - It must start with a letter.
   * - It can be up to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  databaseName?: string;
  /**
   * @remarks
   * The description of the database.
   * 
   * - It must start with a Chinese character or a letter.
   * 
   * - It cannot start with http:// or https://.
   * 
   * - It can contain Chinese characters, letters, underscores (_), hyphens (-), and digits.
   * 
   * - It must be 2 to 256 characters in length.
   * 
   * @example
   * A user management database storing customer profiles.
   */
  description?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * - It can contain only lowercase letters, digits, and underscores (_).
   * 
   * - It must start with a lowercase letter and end with a lowercase letter or a digit.
   * 
   * - It cannot start with gp.
   * 
   * - It must be 2 to 16 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testadb
   */
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      characterSetName: 'CharacterSetName',
      collate: 'Collate',
      ctype: 'Ctype',
      DBInstanceId: 'DBInstanceId',
      databaseName: 'DatabaseName',
      description: 'Description',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterSetName: 'string',
      collate: 'string',
      ctype: 'string',
      DBInstanceId: 'string',
      databaseName: 'string',
      description: 'string',
      owner: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

