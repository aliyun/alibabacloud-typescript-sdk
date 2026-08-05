// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLakebaseS3AccountsResponseBodyS3Accounts extends $dara.Model {
  /**
   * @remarks
   * The account type. Valid values:
   * - default: the built-in default account.
   * - user: a user-created account.
   * 
   * @example
   * default
   */
  accountType?: string;
  /**
   * @remarks
   * The access key of the S3 account.
   * 
   * @example
   * accname
   */
  userAccAk?: string;
  /**
   * @remarks
   * The secret key of the S3 account (displayed in masked format).
   * 
   * @example
   * password***
   */
  userAccSk?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      userAccAk: 'UserAccAk',
      userAccSk: 'UserAccSk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      userAccAk: 'string',
      userAccSk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLakebaseS3AccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 925B84D9-CA72-432C-95CF-738C22******
   */
  requestId?: string;
  /**
   * @remarks
   * The list of S3 accounts.
   */
  s3Accounts?: ListLakebaseS3AccountsResponseBodyS3Accounts[];
  /**
   * @remarks
   * The total number of accounts.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      s3Accounts: 'S3Accounts',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      s3Accounts: { 'type': 'array', 'itemType': ListLakebaseS3AccountsResponseBodyS3Accounts },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.s3Accounts)) {
      $dara.Model.validateArray(this.s3Accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

