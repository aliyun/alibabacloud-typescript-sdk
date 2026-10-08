// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEmailVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * The mailbox that requires verification. Separate multiple mailboxes with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The language of the error message returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default Value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to resend the verification email if it already exists. Valid values:
   * 
   * - **true**: Resend the verification email.
   * - **false**: Do not resend the verification email.
   * 
   * Default Value: **false**.
   * 
   * @example
   * false
   */
  sendIfExist?: boolean;
  /**
   * @remarks
   * The user IP address. You can set it to 127.0.0.1.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lang: 'Lang',
      sendIfExist: 'SendIfExist',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lang: 'string',
      sendIfExist: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

