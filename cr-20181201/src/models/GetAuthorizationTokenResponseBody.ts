// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The password that you use to log on to the registry.
   * 
   * @example
   * shaunadadakks:uuczxnjcyeyhdjadkkajsjdjadhyucb
   */
  authorizationToken?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The timestamp when the temporary token expired. Unit: milliseconds.
   * 
   * @example
   * 1571242083000
   */
  expireTime?: number;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID
   * 
   * @example
   * E069EB86-E6AD-4A98-ADDE-0E993390239A
   */
  requestId?: string;
  /**
   * @remarks
   * The username that you use to log on to the registry.
   * 
   * @example
   * temp_user_cr
   */
  tempUsername?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationToken: 'AuthorizationToken',
      code: 'Code',
      expireTime: 'ExpireTime',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      tempUsername: 'TempUsername',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationToken: 'string',
      code: 'string',
      expireTime: 'number',
      isSuccess: 'boolean',
      requestId: 'string',
      tempUsername: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

