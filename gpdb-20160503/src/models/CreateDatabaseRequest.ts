// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The character set.
   * 
   * For more information about the value range, see Document [https://www.postgresql.org/docs/current/multibyte.html](url).
   * 
   * Default value: UTF-8.
   * 
   * @example
   * UTF8
   */
  characterSetName?: string;
  /**
   * @remarks
   * Database locale parameter (specifies string comparison/sorting rules).
   * 
   * > 
   * 
   * *   The locale must be compatible with the character set specified by the CharacterSetName parameter.
   * 
   * *   Valid values for the Collate field: You can execute the SELECT DISTINCT collname FROM pg_collation; statement to obtain the field value. The default value is en_US.utf8.
   * 
   * @example
   * en_US.utf8
   */
  collate?: string;
  /**
   * @remarks
   * Database locale parameter (defines character classification/case conversion rules).
   * 
   * > 
   * 
   * *   The locale must be compatible with the character set specified by the CharacterSetName parameter.
   * 
   * *   You can execute the SELECT DISTINCT collctype FROM pg_collation; statement to obtain the field value. The default value is en_US.utf8.
   * 
   * @example
   * en_US.utf8
   */
  ctype?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * *   Only contains letters, digits, and underscores (_).
   * *   Must start with a letter.
   * *   Up to 63 characters in length.
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
   * *   Must start with a letter.
   * *   Cannot start with http:// or https://.
   * *   Only contains letters, underscores (_), hyphens (-), and digits.
   * *   Must be 2 to 256 characters in length.
   * 
   * @example
   * A user management database storing customer profiles.
   */
  description?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * *   Only contains lowercase letters, digits, and underscores (_).
   * *   Must start with a lowercase letter and end with a lowercase letter or a digit.
   * *   Cannot start with gp.
   * *   Must be 2 to 16 characters in length.
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

