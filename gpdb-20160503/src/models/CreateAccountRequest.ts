// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the initial account. The description must meet the following requirements:
   * - It must start with a Chinese or English letter.
   * - It cannot start with `http://` or `https://`.
   * - It can contain Chinese characters, English letters, underscores (_), hyphens (-), and digits.
   * - It must be 2 to 256 characters in length.
   * 
   * @example
   * testacc02
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the initial account. The name must meet the following requirements:
   * 
   * - It can contain only lowercase letters, digits, and underscores (_).
   * - It must start with a lowercase letter and end with a lowercase letter or a digit.
   * - It cannot start with gp.
   * - It must be 2 to 16 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc02
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the initial account.
   * 
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - Supported special characters: `!@#$%^&*()_+-=`
   * - The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Pw123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The account type. Default value: Super, which creates a privileged account. If you set this parameter to Normal, a standard account is created.
   * 
   * @example
   * Super
   */
  accountType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name. The name must meet the following requirements:
   * - It can contain only letters, digits, and underscores (_).
   * - It must start with a letter.
   * - It cannot exceed 63 characters in length.
   * 
   * @example
   * test01
   */
  databaseName?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      DBInstanceId: 'DBInstanceId',
      databaseName: 'DatabaseName',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
      DBInstanceId: 'string',
      databaseName: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

