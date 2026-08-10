// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateYikeLoginTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The session expiration time (millisecond timestamp).
   * 
   * @example
   * 1782008128000
   */
  expiresAt?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The login token.
   * 
   * @example
   * ******d6931ff7e89b5eb19484*****
   */
  token?: string;
  /**
   * @remarks
   * The generated user ID.
   * 
   * @example
   * 23253**
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      expiresAt: 'ExpiresAt',
      requestId: 'RequestId',
      token: 'Token',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresAt: 'string',
      requestId: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

