// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Policy extends $dara.Model {
  channelStrategy?: { [key: string]: string };
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  expireTime?: string;
  outerBizNo?: string;
  /**
   * @example
   * 5000
   */
  speed?: number;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelStrategy: 'channelStrategy',
      expireTime: 'expireTime',
      outerBizNo: 'outerBizNo',
      speed: 'speed',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelStrategy: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      expireTime: 'string',
      outerBizNo: 'string',
      speed: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(this.channelStrategy) {
      $dara.Model.validateMap(this.channelStrategy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

