// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateThirdAppAccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time-limited static access token created for the specified user and single cloud desktop. This is a sensitive credential. Do not log or expose the full value.
   * 
   * @example
   * taatv1.v2****
   */
  accessToken?: string;
  /**
   * @remarks
   * The absolute expiration time of the token, in UNIX milliseconds. This parameter is not empty when the call is successful. GetLatestThirdAppAccessToken returns the original expiration time without extending it.
   * 
   * @example
   * 1795450500000
   */
  expiresAt?: number;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to locate and troubleshoot issues.
   * 
   * @example
   * 6DAB2D15-7345-4C33-9D77-48A1A756B9E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      expiresAt: 'ExpiresAt',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      expiresAt: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

