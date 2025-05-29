// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the initial account.
   * 
   * @example
   * testacc02
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
   * This parameter is required.
   * 
   * @example
   * testacc02
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the initial account.
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   Special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Pw123456
   */
  accountPassword?: string;
  /**
   * @remarks
   * The type of the initial account. Default value: Super, which specifies a privileged account. To create a standard account, set the value to Normal.
   * 
   * @example
   * Super
   */
  accountType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
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

