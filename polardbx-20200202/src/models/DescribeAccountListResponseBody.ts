// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * testaccount desc
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * testAccount
   */
  accountName?: string;
  /**
   * @remarks
   * The permissions granted to the account.
   * 
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * The type of the account.
   * 
   * - Before three-role mode is enabled: 0 indicates a standard account, and 1 indicates a privileged user account.
   * - After three-role mode is enabled: 0 indicates a standard account, 2 indicates a system administrator account, 3 indicates a security administrator account, and 4 indicates an audit administrator account.
   * 
   * @example
   * 0
   */
  accountType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * pxc-*********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The database to which the account is granted permissions.
   * 
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @remarks
   * The time when the account was created.
   * 
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

export class DescribeAccountListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeAccountListResponseBodyData[];
  /**
   * @remarks
   * The response message. "success" is returned if the request is successful. Otherwise, the corresponding error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeAccountListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

