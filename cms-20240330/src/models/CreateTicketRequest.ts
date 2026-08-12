// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * - The expiration time of the access token in seconds, which specifies how long the user can access page APIs. Default value: 86400 (one day). Valid values: 0 to 86400 (one day).
   * - The actual access token expiration time is the minimum value of accessTokenExpirationTime and expirationTime.
   * - If you call this operation by using a Security Token Service (STS) token, the actual access token expiration time is the minimum value of accessTokenExpirationTime, expirationTime, and the STS token expiration time.
   * 
   * @example
   * 600
   */
  accessTokenExpirationTime?: number;
  /**
   * @remarks
   * - The expiration time in seconds for the embedded page URL link. Default value: 86400 (one day). Valid values: 0 to 2592000 (30 days).
   * 
   * @example
   * 86400
   */
  expirationTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessTokenExpirationTime: 'accessTokenExpirationTime',
      expirationTime: 'expirationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenExpirationTime: 'number',
      expirationTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

