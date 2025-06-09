// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketRequest extends $dara.Model {
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
   * *   You must use the Simple Log Service endpoint for the China (Shanghai) or Singapore region to call the CreateTicket operation. After you obtain the ticket, you can use the ticket regardless of the region.
   * *   The validity period for the URL of the console page that you want to embed. Unit: seconds. Default value: 86400, which specifies one day. Valid values: 0 to 2592000. The value 2592000 specifies 30 days.
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

