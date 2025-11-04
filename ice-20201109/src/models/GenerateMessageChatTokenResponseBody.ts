// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateMessageChatTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AppID of the user.
   * 
   * @example
   * ***********
   */
  appId?: string;
  /**
   * @remarks
   * The application signature.
   * 
   * @example
   * H4sIAAAAAAAE******************
   */
  appSign?: string;
  /**
   * @remarks
   * The nonce used to generate the token.
   * 
   * @example
   * AK-***********
   */
  nonce?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req_1234567890abcdef
   */
  requestId?: string;
  /**
   * @remarks
   * The role used to generate the token.
   * 
   * @example
   * admin
   */
  role?: string;
  /**
   * @remarks
   * The expiration time. Unit: seconds. Expiration time = Current time + Validity period.
   * 
   * @example
   * 1700000000
   */
  timeStamp?: number;
  /**
   * @remarks
   * The generated token.
   * 
   * @example
   * acet**********
   */
  token?: string;
  /**
   * @remarks
   * The ID of the user for joining the channel.
   * 
   * @example
   * YOURUSERID
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSign: 'AppSign',
      nonce: 'Nonce',
      requestId: 'RequestId',
      role: 'Role',
      timeStamp: 'TimeStamp',
      token: 'Token',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSign: 'string',
      nonce: 'string',
      requestId: 'string',
      role: 'string',
      timeStamp: 'number',
      token: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

