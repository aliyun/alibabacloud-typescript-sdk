// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the authentication failure.
   * 
   * @example
   * null
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The JWT used as the Authorization query parameter for the Chat operation. The token is valid for a limited period of time.
   * 
   * @example
   * "eyJhbGc****.eyJ********.****TCk"
   */
  accessToken?: string;
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * "200"
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error details. This parameter is returned only when the request fails.
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * The request ID, in UUID format. The first and last characters are retained for illustration purposes.
   * 
   * @example
   * "EA12****-****-****-****-****E5C"
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      accessToken: 'AccessToken',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      accessToken: 'string',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

