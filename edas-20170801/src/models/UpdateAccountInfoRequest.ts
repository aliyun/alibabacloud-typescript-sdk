// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccountInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the account.
   * 
   * @example
   * 1321234****@alibaba-inc.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * edas-test
   */
  name?: string;
  /**
   * @remarks
   * The contact information of the account.
   * 
   * @example
   * 1321234****
   */
  telephone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      name: 'Name',
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      name: 'string',
      telephone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

