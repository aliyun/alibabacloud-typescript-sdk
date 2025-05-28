// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAccountResponseBodyData extends $dara.Model {
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
   * *************
   */
  password?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * xxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      password: 'string',
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

