// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyForStreamAccessTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 63ba97b4f18a4a04f715c81e8e643938
   */
  accessToken?: string;
  /**
   * @example
   * cc9e88c0-4f41-4f1d-a1a9-91a72d2aa27d
   */
  channelId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 736994BD-AA35-4742-88C9-E64BE4BAA14B
   */
  requestId?: string;
  /**
   * @example
   * cc9e88c0-4f41-4f1d-a1a9-91a72d2aa27d
   */
  streamSecret?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      channelId: 'ChannelId',
      requestId: 'RequestId',
      streamSecret: 'StreamSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      channelId: 'string',
      requestId: 'string',
      streamSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

