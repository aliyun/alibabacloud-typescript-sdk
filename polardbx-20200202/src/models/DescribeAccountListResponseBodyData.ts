// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountListResponseBodyData extends $dara.Model {
  /**
   * @example
   * testaccount desc
   */
  accountDescription?: string;
  /**
   * @example
   * testAccount
   */
  accountName?: string;
  /**
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @example
   * 0
   */
  accountType?: string;
  /**
   * @example
   * pxc-*********
   */
  DBInstanceName?: string;
  /**
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @example
   * 2012-06-08T15:00Z
   */
  gmtCreated?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      accountType: 'AccountType',
      DBInstanceName: 'DBInstanceName',
      DBName: 'DBName',
      gmtCreated: 'GmtCreated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPrivilege: 'string',
      accountType: 'string',
      DBInstanceName: 'string',
      DBName: 'string',
      gmtCreated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

