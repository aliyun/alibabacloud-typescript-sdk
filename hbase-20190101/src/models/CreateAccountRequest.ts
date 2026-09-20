// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The account name. The name must meet the following requirements:
   * 
   * * Starts with a lowercase letter and ends with a letter or digit.
   * * Contains only lowercase letters, digits, or underscores.
   * * Is 2 to 16 characters in length.
   * * Cannot be a reserved username such as root or admin.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account. The password must meet the following requirements:
   * - Contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * - The supported special characters are `!@#$%^&*()_+-=`.
   * - Is 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test*****
   */
  accountPassword?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

