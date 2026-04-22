// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      remark: 'remark',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      remark: 'string',
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

