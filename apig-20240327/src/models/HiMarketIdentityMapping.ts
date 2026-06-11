// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketIdentityMapping extends $dara.Model {
  /**
   * @remarks
   * The identity provider attribute that maps to the user\\"s email address.
   */
  emailField?: string;
  /**
   * @remarks
   * The identity provider attribute that maps to the user\\"s unique ID.
   */
  userIdField?: string;
  /**
   * @remarks
   * The identity provider attribute that maps to the username.
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

