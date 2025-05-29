// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The new description of the database account.
   * 
   * *   The description must start with a letter.
   * *   The description cannot start with `http://` or `https://`.
   * *   The description can contain letters, underscores (_), hyphens (-), and digits.
   * *   The description must be 2 to 256 characters in length.
   * 
   * @example
   * The instance used by this account to log in is DBInstanceId. The name used to log in is AccountName.
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the initial account.
   * 
   * *   The name can contain lowercase letters, digits, and underscores (_).
   * *   The name must start with a lowercase letter and end with a lowercase letter or a digit.
   * *   The name cannot start with gp.
   * *   The name must be 2 to 16 characters in length.
   * 
   * @example
   * testaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the member that you want to query.
   * 
   * *   **enabled**: managed.
   * *   **disabled**: not managed.
   * *   **disabling**: being deleted.
   * 
   * @example
   * 1
   */
  accountStatus?: string;
  /**
   * @remarks
   * *   Normal: standard account
   * *   Super: privileged account
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CA7E4276-E2D5-5F8D-AF06-9EAB3F6C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      DBInstanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

