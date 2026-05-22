// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWafBotAppKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Application key.
   * 
   * @example
   * example_appkey
   */
  appKey?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
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

