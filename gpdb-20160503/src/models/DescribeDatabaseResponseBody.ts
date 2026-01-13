// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permission control information.
   * 
   * @example
   * =Tc/test_001\\ntest_001=CTc/test_001
   */
  accessPrivilege?: string;
  /**
   * @remarks
   * The character set.
   * 
   * For more information about the value range, see Document https://www.postgresql.org/docs/current/multibyte.html.
   * 
   * @example
   * UTF8
   */
  characterSetName?: string;
  /**
   * @remarks
   * Database locale parameter that specifies string comparison and sorting rules.
   * 
   * > 
   * 
   * *   The locale must be compatible with the character set specified by the CharacterSetName parameter.
   * 
   * *   Collate: You can query available collations using the command SELECT DISTINCT collname FROM pg_collation;. If not specified, the default value is en_US.utf8.
   * 
   * @example
   * en_US.utf8
   */
  collate?: string;
  /**
   * @remarks
   * Limits the number of concurrent connections. -1 indicates unlimited.
   * 
   * @example
   * -1
   */
  connLimit?: string;
  /**
   * @remarks
   * Database locale parameter that specifies character classification and case conversion rules.
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
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * *   Only contain letters, digits, and underscores (_).
   * *   Must start with a letter.
   * *   Up to 63 characters in length.
   * 
   * @example
   * test01
   */
  databaseName?: string;
  /**
   * @remarks
   * The database comment.
   * 
   * @example
   * A user management database storing customer profiles.
   */
  description?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * *   Contain lowercase letters, digits, and underscores (_).
   * *   Must start with a lowercase letter and end with a lowercase letter or a digit.
   * *   Cannot start with gp.
   * *   Must be 2 to 16 characters in length.
   * 
   * @example
   * testadb
   */
  owner?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The database size.
   * 
   * @example
   * 2000 MB
   */
  size?: string;
  /**
   * @remarks
   * The database tablespace.
   * 
   * @example
   * pg_default
   */
  tableSpace?: string;
  static names(): { [key: string]: string } {
    return {
      accessPrivilege: 'AccessPrivilege',
      characterSetName: 'CharacterSetName',
      collate: 'Collate',
      connLimit: 'ConnLimit',
      ctype: 'Ctype',
      DBInstanceId: 'DBInstanceId',
      databaseName: 'DatabaseName',
      description: 'Description',
      owner: 'Owner',
      requestId: 'RequestId',
      size: 'Size',
      tableSpace: 'TableSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPrivilege: 'string',
      characterSetName: 'string',
      collate: 'string',
      connLimit: 'string',
      ctype: 'string',
      DBInstanceId: 'string',
      databaseName: 'string',
      description: 'string',
      owner: 'string',
      requestId: 'string',
      size: 'string',
      tableSpace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

