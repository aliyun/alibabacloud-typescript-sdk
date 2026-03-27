// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequest extends $dara.Model {
  /**
   * @remarks
   * - Access token expiration time (in seconds), which is the expiration time for the user to access the page interface. The default value is 86400 seconds (one day), and the range of values is from 0 to 86400 seconds (one day).
   * - The access token expiration time is the minimum value between `accessTokenExpirationTime` and `expirationTime`.
   * - If called through STS, the access token expiration time (i.e., the time during which the user can access the page interface) is the minimum value among `accessTokenExpirationTime`, `expirationTime`, and the STS expiration time.
   * 
   * @example
   * 600
   */
  accessTokenExpirationTime?: number;
  /**
   * @remarks
   * - Expiration time (in seconds), which is the expiration time for the embedded page URL. The default value is 86400 seconds (one day), and the range of values is from 0 to 2592000 seconds (30 days).
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

