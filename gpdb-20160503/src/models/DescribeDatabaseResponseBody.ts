// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access control information.
   * 
   * @example
   * =Tc/test_001\ntest_001=CTc/test_001
   */
  accessPrivilege?: string;
  /**
   * @remarks
   * The character set.
   * 
   * For the valid values, refer to the References at https://www.postgresql.org/docs/current/multibyte.html.
   * 
   * @example
   * UTF8
   */
  characterSetName?: string;
  /**
   * @remarks
   * The locale setting of the database, which specifies the string comparison and sorting rules.
   * >
   * > - The locale must be compatible with the character set specified by the CharacterSetName parameter.
   * > - Valid values: You can run the SELECT DISTINCT collname FROM pg_collation; command to query the valid values. If this parameter is not specified, the default value is en_US.utf8.
   * 
   * @example
   * en_US.utf8
   */
  collate?: string;
  /**
   * @remarks
   * The maximum number of concurrent connections. A value of -1 indicates no limit.
   * 
   * @example
   * -1
   */
  connLimit?: string;
  /**
   * @remarks
   * The locale setting of the database, which specifies the character classification and case conversion rules.
   * > 
   * > - The locale must be compatible with the character set specified by the CharacterSetName parameter.
   * > - You can run the SELECT DISTINCT collctype FROM pg_collation; command to query the valid values. If this parameter is not specified, the default value is en_US.utf8.
   * 
   * @example
   * en_US.utf8
   */
  ctype?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * - It can contain only letters, digits, and underscores (_).
   * 
   * - It must start with a letter.
   * 
   * - It cannot exceed 63 characters in length.
   * 
   * @example
   * test01
   */
  databaseName?: string;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * A user management database storing customer profiles.
   */
  description?: string;
  /**
   * @remarks
   * The owner of the database.
   * 
   * - It can contain only lowercase letters, digits, and underscores (_).
   * 
   * - It must start with a lowercase letter and end with a lowercase letter or a digit.
   * 
   * - It cannot start with gp.
   * 
   * - It must be 2 to 16 characters in length.
   * 
   * @example
   * testadb
   */
  owner?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The size of the database.
   * 
   * @example
   * 2000 MB
   */
  size?: string;
  /**
   * @remarks
   * The tablespace of the database.
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

