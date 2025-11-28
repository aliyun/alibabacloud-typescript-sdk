// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabaseResponseBody extends $dara.Model {
  /**
   * @example
   * =Tc/test_001\\ntest_001=CTc/test_001
   */
  accessPrivilege?: string;
  /**
   * @example
   * UTF8
   */
  characterSetName?: string;
  /**
   * @example
   * en_US.utf8
   */
  collate?: string;
  /**
   * @example
   * -1
   */
  connLimit?: string;
  /**
   * @example
   * en_US.utf8
   */
  ctype?: string;
  /**
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * test01
   */
  databaseName?: string;
  /**
   * @example
   * A user management database storing customer profiles.
   */
  description?: string;
  /**
   * @example
   * testadb
   */
  owner?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * 2000 MB
   */
  size?: string;
  /**
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

