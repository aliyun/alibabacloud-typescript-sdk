// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmartAccessGatewayClientUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth value. Unit: Kbit/s.
   * 
   * @example
   * 20
   */
  bandwidth?: number;
  /**
   * @remarks
   * The IP address of the client app.
   * 
   * @example
   * 10.0.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72E82F5E-66E8-4C22-BF1F-5CEB7DC132E7
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
   * The username.
   * 
   * @example
   * doc
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

