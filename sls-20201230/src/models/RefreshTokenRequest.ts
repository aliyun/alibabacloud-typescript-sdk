// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshTokenRequest extends $dara.Model {
  /**
   * @remarks
   * *   The validity period of the access token. Unit: seconds. Default value: 86400, which specifies one day. Valid values: 0 to 86400.
   * *   The validity period of the access token is the smaller value between accessTokenExpirationTime and expirationTime.
   * *   If you use a Security Token Service (STS) token to call this operation, the validity period of the access token is the smallest value among accessTokenExpirationTime, expirationTime, and the validity period of the STS token.
   * 
   * @example
   * 600
   */
  accessTokenExpirationTime?: number;
  /**
   * @remarks
   * The ticket that is used for logon-free access.
   * 
   * @example
   * eyJ***************.eyJ******************.KUT****************
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenExpirationTime: 'accessTokenExpirationTime',
      ticket: 'ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenExpirationTime: 'number',
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

