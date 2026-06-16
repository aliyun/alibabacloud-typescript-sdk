// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOauthTokenResponseBodyTokenResponse extends $dara.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * ***
   */
  accessToken?: string;
  /**
   * @remarks
   * The expiration time, in Unix timestamp format (seconds since epoch).
   * 
   * @example
   * 1770186372
   */
  expiresAt?: number;
  /**
   * @remarks
   * The validity period, in seconds.
   * 
   * @example
   * 1200
   */
  expiresIn?: number;
  /**
   * @remarks
   * The token type. Only Bearer is supported.
   * 
   * @example
   * Bearer
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      expiresAt: 'ExpiresAt',
      expiresIn: 'ExpiresIn',
      tokenType: 'TokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      expiresAt: 'number',
      expiresIn: 'number',
      tokenType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOauthTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4XXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The token response.
   */
  tokenResponse?: GenerateOauthTokenResponseBodyTokenResponse;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tokenResponse: 'TokenResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tokenResponse: GenerateOauthTokenResponseBodyTokenResponse,
    };
  }

  validate() {
    if(this.tokenResponse && typeof (this.tokenResponse as any).validate === 'function') {
      (this.tokenResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

