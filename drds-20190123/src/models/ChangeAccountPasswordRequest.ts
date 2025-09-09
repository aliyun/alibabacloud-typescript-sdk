// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the member account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The new password.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      drdsInstanceId: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

