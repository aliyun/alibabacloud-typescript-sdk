// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVisitorLoginDetailsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 7pjxxx
   */
  chatAppId?: string;
  /**
   * @example
   * 955e4bd7xxxxxxxxxxxxxd7898ba9fa0d0
   */
  chatAppKey?: string;
  /**
   * @example
   * 4c51c9116c36537cb850dc1081d745df
   */
  chatDeviceId?: string;
  /**
   * @example
   * {"accessToken":"oauth_cloud_key:+4oJXUAFSWxGD2YuRW4V/oUN0/8qJGNc0I*********n1E3DOr3Q3lX00ZnTpyqRi8Y6hYoLYA7n2ZkWuv485hVtXeSgnIQkKxXPbMgwoLxWaK//lI5Dn/mb4YuDifigv+ZyFzc+07vxm9ZFu/NjA==","accessTokenExpiredTime":86400000,"refreshToken":"oauth_cloud_key:/U+8UueDmpeUszhXC+SWow4pNLZp2C***********U/377BNXF+Mjo1lFgDk6GtEjNNoJpapX2mHH8GcRke2+yKQs/w4gAN9xSMn543Ciung+93pXV6IpQGbEVlu"}
   */
  chatLoginToken?: string;
  /**
   * @example
   * wss://wss.im.dingtalk.cn
   */
  chatServerUrl?: string;
  /**
   * @example
   * dac9c001****a15684ea91a81317
   */
  chatUserId?: string;
  static names(): { [key: string]: string } {
    return {
      chatAppId: 'ChatAppId',
      chatAppKey: 'ChatAppKey',
      chatDeviceId: 'ChatDeviceId',
      chatLoginToken: 'ChatLoginToken',
      chatServerUrl: 'ChatServerUrl',
      chatUserId: 'ChatUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatAppId: 'string',
      chatAppKey: 'string',
      chatDeviceId: 'string',
      chatLoginToken: 'string',
      chatServerUrl: 'string',
      chatUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

