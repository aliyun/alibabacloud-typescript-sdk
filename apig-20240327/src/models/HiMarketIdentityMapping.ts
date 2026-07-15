// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketIdentityMapping extends $dara.Model {
  /**
   * @remarks
   * The identity field name that corresponds to the mailbox.
   * 
   * @example
   * email
   */
  emailField?: string;
  /**
   * @remarks
   * The identity field name that corresponds to the user ID.
   * 
   * @example
   * sub
   */
  userIdField?: string;
  /**
   * @remarks
   * The identity field name that corresponds to the username.
   * 
   * @example
   * name
   */
  userNameField?: string;
  static names(): { [key: string]: string } {
    return {
      emailField: 'emailField',
      userIdField: 'userIdField',
      userNameField: 'userNameField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emailField: 'string',
      userIdField: 'string',
      userNameField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

