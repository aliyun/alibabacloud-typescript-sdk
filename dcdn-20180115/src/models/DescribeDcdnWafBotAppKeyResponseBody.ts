// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafBotAppKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The SDK authentication key for the Alibaba Cloud account.
   * 
   * @example
   * examp1eapp_key_xxxiuMWTX4Gw
   */
  appKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2542B96-B535-5BF9-8EEE-1CF11B20CCA8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

