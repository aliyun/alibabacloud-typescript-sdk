// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAvatarSessionResponseBody extends $dara.Model {
  channelToken?: string;
  requestId?: string;
  sessionId?: string;
  token?: string;
  webSocketUrl?: string;
  static names(): { [key: string]: string } {
    return {
      channelToken: 'channelToken',
      requestId: 'requestId',
      sessionId: 'sessionId',
      token: 'token',
      webSocketUrl: 'webSocketUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelToken: 'string',
      requestId: 'string',
      sessionId: 'string',
      token: 'string',
      webSocketUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

