// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserIdByEmailRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the user who owns the account.
   * 
   * This parameter is required.
   * 
   * @example
   * example@example.com
   */
  email?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

