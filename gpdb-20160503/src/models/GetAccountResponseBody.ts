// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The modified account description. The description must meet the following requirements:
   * 
   * - The description must start with a Chinese character or an English letter.
   * - The description cannot start with `http://` or `https://`.
   * - The description can contain Chinese characters, English characters, underscores (_), hyphens (-), and digits.
   * - The description must be 2 to 256 characters in length.
   * 
   * @example
   * The instance used by this account to log in is DBInstanceId. The name used to log in is AccountName.
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the initial account. The name must meet the following requirements:
   * 
   * - The name can contain lowercase letters, digits, and underscores (_).
   * - The name must start with a lowercase letter and end with a lowercase letter or digit.
   * - The name cannot start with gp.
   * - The name must be 2 to 16 characters in length.
   * 
   * @example
   * testaccount
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the database account. Valid values:
   * 
   * - **0**: Being created.
   * - **1**: In use.
   * - **3**: Being deleted.
   * 
   * @example
   * 1
   */
  accountStatus?: string;
  /**
   * @remarks
   * The type of the host account. Valid values:
   * - **Normal**: standard account.
   * - **Admin**: administrator account.
   * 
   * For more information about the permissions of host accounts, see [Host account permissions](https://help.aliyun.com/document_detail/176240.html).
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a region, including instance IDs.
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

