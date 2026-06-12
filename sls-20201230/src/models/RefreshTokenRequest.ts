// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshTokenRequest extends $dara.Model {
  /**
   * @remarks
   * - The expiration time of the access token in seconds. This specifies the period during which the token is valid for accessing page API operations. The default value is 86400 seconds (one day). The value must be an integer from 0 to 86400.
   * 
   * - The actual expiration time of the access token is the minimum value of accessTokenExpirationTime and expirationTime.
   * 
   * - If you call this operation using Security Token Service (STS), the actual expiration time of the access token is the minimum value of accessTokenExpirationTime, expirationTime, and the STS token expiration time.
   * 
   * @example
   * 600
   */
  accessTokenExpirationTime?: number;
  /**
   * @remarks
   * The logon-free ticket.
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

