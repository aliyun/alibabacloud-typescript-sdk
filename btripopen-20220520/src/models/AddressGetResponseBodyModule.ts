// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddressGetResponseBodyModule extends $dara.Model {
  /**
   * @example
   * https://trip-hisv.taobao.com/ding/trustLogin.htm?redirectUrl=https%3A%2F%2Fmarket.m.taobao.com%2Fapp%2Fbtrip-fe%2Frx-alitrip-main%2Fhome.html%3Ffpt%3DbIdentify%2528dingtalk.isv.h5.home%2529%26corpId%3Dding3f9797e277423f14a1320dcb25e91351%26dingUserId%3Dmanager9302%26dingAppId%3D1692%26fit%3Dtrue&token=b73e0b9e-d25a-40f0-aff8-2c2e58da659b
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

