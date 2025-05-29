// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeviceURLResponseBody extends $dara.Model {
  /**
   * @example
   * 1639130258
   */
  expireTime?: number;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * rtmp://demo.aliyundoc.com/live/live001?auth_key=1639130258-0-0-b2b04fe85ece6*****a6b1a42bc7e
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      requestId: 'string',
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

