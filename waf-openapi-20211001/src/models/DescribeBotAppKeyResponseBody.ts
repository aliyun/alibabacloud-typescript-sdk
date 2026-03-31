// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBotAppKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * AppKey。
   * 
   * @example
   * N1Kiv3AGZm******
   */
  appKey?: string;
  /**
   * @example
   * 0C4ADFD4-5B7D-591D-A607-A45C*****
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

