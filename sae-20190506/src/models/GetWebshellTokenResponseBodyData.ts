// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebshellTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * HttpUrl :  "https://saenext.console.aliyun.com/cn-shenzhen/app-list/app1/micro-app/shell/pod1?tokenId=xxx
   */
  httpUrl?: string;
  /**
   * @example
   * zWWpvRj_5pzof4hfo7-hGynM8oGMmO_7
   */
  token?: string;
  /**
   * @example
   * wss://sae-webshell.console.aliyun.com/websocket/eamWebshell?tokenId=xxx&region=cn-shenzhen
   */
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

