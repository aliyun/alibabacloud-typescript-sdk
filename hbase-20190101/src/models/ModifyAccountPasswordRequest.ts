// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of target instance. You can call the DescribeInstances operation to obtain target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * The new password of the account. The password must meet the following requirements:
   * * Contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * * Is 8 to 32 characters in length.
   * * Special characters include `!@#$%^&*()_+-=`.
   * 
   * This parameter is required.
   * 
   * @example
   * test*****
   */
  newAccountPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      clusterId: 'ClusterId',
      newAccountPassword: 'NewAccountPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      clusterId: 'string',
      newAccountPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

