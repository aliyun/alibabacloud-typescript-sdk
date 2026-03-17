// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmartAccessGatewayClientUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth allocated to the client account. Unit: Kbit/s.
   * 
   * @example
   * 1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 10.10.10.1
   */
  clientIp?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5F0078B5-8AAD-4B53-8351-4C91B8EA528A
   */
  requestId?: string;
  /**
   * @remarks
   * The email address of the client account.
   * 
   * @example
   * username@example.com
   */
  userMail?: string;
  /**
   * @remarks
   * The username of the client account.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientIp: 'ClientIp',
      requestId: 'RequestId',
      userMail: 'UserMail',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientIp: 'string',
      requestId: 'string',
      userMail: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

