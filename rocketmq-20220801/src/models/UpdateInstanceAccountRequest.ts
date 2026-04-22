// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The status of the account.
   * 
   * Valid values:
   * 
   * *   DISABLE
   * *   ENABLE
   * 
   * @example
   * ENABLE
   */
  accountStatus?: string;
  /**
   * @remarks
   * The password of the account.
   * 
   * @example
   * test
   */
  password?: string;
  /**
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      password: 'password',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      password: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

