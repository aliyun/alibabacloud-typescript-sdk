// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyEmailRequest extends $dara.Model {
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Token code included in the email verification link.
   * 
   * After the verification email is sent successfully, you can log on to the mailbox to be verified and view the token code.
   * 
   * This parameter is required.
   * 
   * @example
   * 0b32247496409441e9e179ea7c2e0****
   */
  token?: string;
  /**
   * @remarks
   * User IP address. You can set it to 127.0.0.1.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      token: 'Token',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      token: 'string',
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

