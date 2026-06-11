// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * - The expiration time of the access token, in seconds. This is the period during which a user can access the page APIs. The value can range from 0 to 86,400 seconds (one day). The default value is 86,400 seconds (one day).
   * 
   * - The effective expiration time of the access token is the minimum value of accessTokenExpirationTime and expirationTime.
   * 
   * - If you call the operation using a Security Token Service (STS) token, the effective expiration time of the access token is the minimum value of accessTokenExpirationTime, expirationTime, and the expiration time of the STS token.
   * 
   * @example
   * 600
   */
  accessTokenExpirationTime?: number;
  /**
   * @remarks
   * - The expiration time of the URL for the embedded page, in seconds. The value can range from 0 to 2,592,000 seconds (30 days). The default value is 86,400 seconds (one day).
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

