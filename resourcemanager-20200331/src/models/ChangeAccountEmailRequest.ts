// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeAccountEmailRequest extends $dara.Model {
  /**
   * @remarks
   * The member account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 181761095690****
   */
  accountId?: string;
  /**
   * @remarks
   * The email address of the member account.
   * 
   * > The system automatically sends a verification email to the specified email address. The modification takes effect only after the verification is complete. After the verification is complete, the system synchronously updates the email address and security email address of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
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

