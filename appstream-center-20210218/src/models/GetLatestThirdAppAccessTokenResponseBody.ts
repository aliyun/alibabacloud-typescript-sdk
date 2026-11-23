// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLatestThirdAppAccessTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current valid static access token for the specified user and single cloud desktop. The original saved token is returned, and the query does not renew the token. This is a sensitive credential. Do not log or expose the full value.
   * 
   * @example
   * taatv1.v2****
   */
  accessToken?: string;
  /**
   * @remarks
   * The absolute expiration time of the token, represented as a Unix timestamp in milliseconds. This parameter is not empty when the call is successful. GetLatestThirdAppAccessToken returns the original expiration time and does not renew the token.
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

