// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the account.
   * 
   * @example
   * ENABLE
   */
  accountStatus?: string;
  /**
   * @remarks
   * The type of the account.
   * 
   * @example
   * CUSTOMER
   */
  accountType?: string;
  /**
   * @remarks
   * The page number. The first page is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      accountType: 'accountType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      accountType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

