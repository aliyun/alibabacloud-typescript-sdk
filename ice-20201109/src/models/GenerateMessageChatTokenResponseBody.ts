// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateMessageChatTokenResponseBody extends $dara.Model {
  /**
   * @example
   * ***********
   */
  appId?: string;
  /**
   * @example
   * H4sIAAAAAAAE******************
   */
  appSign?: string;
  /**
   * @example
   * AK-***********
   */
  nonce?: string;
  /**
   * @example
   * req_1234567890abcdef
   */
  requestId?: string;
  /**
   * @example
   * admin
   */
  role?: string;
  /**
   * @example
   * 1700000000
   */
  timeStamp?: number;
  /**
   * @example
   * acet**********
   */
  token?: string;
  /**
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

