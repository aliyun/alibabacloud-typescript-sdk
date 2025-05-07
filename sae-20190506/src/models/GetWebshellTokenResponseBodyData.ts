// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebshellTokenResponseBodyData extends $dara.Model {
  httpUrl?: string;
  /**
   * @example
   * zWWpvRj_5pzof4hfo7-hGynM8oGMmO_7
   */
  token?: string;
  webSocketUrl?: string;
  static names(): { [key: string]: string } {
    return {
      httpUrl: 'HttpUrl',
      token: 'Token',
      webSocketUrl: 'WebSocketUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpUrl: 'string',
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

